-- CreateEnum
CREATE TYPE "CompetitiveLevel" AS ENUM ('RECREATIONAL', 'COMPETITIVE');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('PARENT', 'STUDIO', 'INSTRUCTOR');

-- CreateTable
CREATE TABLE "AgeLevel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "studioId" TEXT NOT NULL,

    CONSTRAINT "AgeLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DanceClass" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "performanceName" TEXT,
    "styleOfDanceId" TEXT NOT NULL,
    "footwearId" TEXT,
    "tightsId" TEXT,
    "song" TEXT,
    "competitions" BOOLEAN,
    "recital" BOOLEAN NOT NULL,
    "studioId" TEXT,
    "instructorId" TEXT,
    "parentId" TEXT,
    "ageLevelId" TEXT NOT NULL,
    "skillLevelId" TEXT NOT NULL,
    "startTime" TEXT,
    "endTime" TEXT,
    "dayOfWeek" TEXT,
    "competitionEntryTime" TEXT,
    "competitionEntryDayOfWeek" TEXT,
    "studioNotes" TEXT,
    "competitionEntryNumber" TEXT,
    "competitionName" TEXT,
    "compScheduleUrl" TEXT,

    CONSTRAINT "DanceClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dancer" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3),
    "parentId" TEXT NOT NULL,
    "imageFilename" TEXT,

    CONSTRAINT "Dancer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enrollment" (
    "id" TEXT NOT NULL,
    "dancerId" TEXT NOT NULL,
    "danceClassId" TEXT NOT NULL,
    "studioId" TEXT NOT NULL,
    "requested" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "approved" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Footwear" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "studioId" TEXT NOT NULL,
    "imageFilename" TEXT,
    "color" TEXT,

    CONSTRAINT "Footwear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Parent" (
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "ParentNote" (
    "id" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ParentNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "danceClassId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "dayOfWeek" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillLevel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "studioId" TEXT NOT NULL,

    CONSTRAINT "SkillLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Studio" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vectorStoreId" TEXT,
    "assistantId" TEXT,

    CONSTRAINT "Studio_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "StyleOfDance" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "studioId" TEXT NOT NULL,

    CONSTRAINT "StyleOfDance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tights" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "imageFilename" TEXT,
    "studioId" TEXT NOT NULL,
    "color" TEXT,

    CONSTRAINT "Tights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" "UserType" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "_InstructorToStudio" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_InstructorToStudio_AB_unique" ON "_InstructorToStudio"("A", "B");

-- CreateIndex
CREATE INDEX "_InstructorToStudio_B_index" ON "_InstructorToStudio"("B");

-- AddForeignKey
ALTER TABLE "AgeLevel" ADD CONSTRAINT "AgeLevel_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DanceClass" ADD CONSTRAINT "DanceClass_ageLevelId_fkey" FOREIGN KEY ("ageLevelId") REFERENCES "AgeLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DanceClass" ADD CONSTRAINT "DanceClass_footwearId_fkey" FOREIGN KEY ("footwearId") REFERENCES "Footwear"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DanceClass" ADD CONSTRAINT "DanceClass_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DanceClass" ADD CONSTRAINT "DanceClass_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DanceClass" ADD CONSTRAINT "DanceClass_skillLevelId_fkey" FOREIGN KEY ("skillLevelId") REFERENCES "SkillLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DanceClass" ADD CONSTRAINT "DanceClass_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DanceClass" ADD CONSTRAINT "DanceClass_styleOfDanceId_fkey" FOREIGN KEY ("styleOfDanceId") REFERENCES "StyleOfDance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DanceClass" ADD CONSTRAINT "DanceClass_tightsId_fkey" FOREIGN KEY ("tightsId") REFERENCES "Tights"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dancer" ADD CONSTRAINT "Dancer_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_danceClassId_fkey" FOREIGN KEY ("danceClassId") REFERENCES "DanceClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_dancerId_fkey" FOREIGN KEY ("dancerId") REFERENCES "Dancer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Footwear" ADD CONSTRAINT "Footwear_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instructor" ADD CONSTRAINT "Instructor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentNote" ADD CONSTRAINT "ParentNote_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_danceClassId_fkey" FOREIGN KEY ("danceClassId") REFERENCES "DanceClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillLevel" ADD CONSTRAINT "SkillLevel_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Studio" ADD CONSTRAINT "Studio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StyleOfDance" ADD CONSTRAINT "StyleOfDance_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tights" ADD CONSTRAINT "Tights_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InstructorToStudio" ADD CONSTRAINT "_InstructorToStudio_A_fkey" FOREIGN KEY ("A") REFERENCES "Instructor"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InstructorToStudio" ADD CONSTRAINT "_InstructorToStudio_B_fkey" FOREIGN KEY ("B") REFERENCES "Studio"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

