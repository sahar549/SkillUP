import { pgTable, serial, varchar, json, boolean } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"




export const chapters = pgTable("chapters", {
	id: serial("id").primaryKey().notNull(),
	courseid: varchar("courseid").notNull(),
	chapterId: varchar("chapterId").notNull(),
	content: json("content").notNull(),
	videoId: varchar("videoId").notNull(),
});

export const courseList = pgTable("courseList", {
	id: serial("id").primaryKey().notNull(),
	courseId: varchar("courseId").notNull(),
	name: varchar("name").notNull(),
	category: varchar("category").notNull(),
	level: varchar("level").notNull(),
	includeVideo: varchar("includeVideo").default('Yes').notNull(),
	courseOutput: json("courseOutput").notNull(),
	createdBy: varchar("createdBy").notNull(),
	username: varchar("username"),
	userProfileImage: varchar("userProfileImage"),
	courseBanner: varchar("courseBanner").default('/course-cover.svg'),
	publish: boolean("publish").default(false),
});