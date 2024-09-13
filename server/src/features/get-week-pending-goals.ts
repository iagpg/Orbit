import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { db } from '../db'
import { goalCompletions, goals } from '../db/schema'
import { and, count, lte, eq, gte, sql } from 'drizzle-orm'
import { number } from 'zod'

dayjs.extend(weekOfYear)

export async function getWeekPendingGoals() {
  //const currentYear = dayjs().year()
  const lastDayOfWeek = dayjs().endOf('week').toDate()
  const firstDayOfWeek = dayjs().startOf('week').toDate()
  //const currentWeek = dayjs().week()

  const goalCreatedUpToWeek = db.$with('goals_created_up_to_week').as(
    db
      .select({
        id: goals.id,
        title: goals.title,
        desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
        createdAt: goals.createdAt,
      })
      .from(goals)
      .where(lte(goals.createdAt, lastDayOfWeek)) // lower than or equal <=
  )

  const goalCompletionCounts = db.$with('goal_completion_counts').as(
    db
      .select({
        goalId: goalCompletions.goalId,
        completionCount: count(goalCompletions.id)
          //.mapWith(Number)
          .as('completionCount'),
      })
      .from(goalCompletions)
      .where(
        and(
          gte(goalCompletions.createdAt, firstDayOfWeek),
          lte(goalCompletions.createdAt, lastDayOfWeek)
        )
      )
      .groupBy(goalCompletions.goalId)
  )

  const pendingGoals = await db
    .with(goalCreatedUpToWeek, goalCompletionCounts)
    .select({
      id: goalCreatedUpToWeek.id,
      title: goalCreatedUpToWeek.title,
      desiredWeeklyFrenquency: goalCreatedUpToWeek.desiredWeeklyFrequency,
      competionCount: sql`
      COALESCE(${goalCompletionCounts.completionCount},0)
      `.mapWith(Number),
    })
    .from(goalCreatedUpToWeek)
    .leftJoin(
      goalCompletionCounts,
      eq(goalCompletionCounts.goalId, goalCreatedUpToWeek.id)
    )

  return { pendingGoals }
}
