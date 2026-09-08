/*
  Warnings:

  - You are about to drop the `DoctorSpecialty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `specialties` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DoctorSpecialty" DROP CONSTRAINT "DoctorSpecialty_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "DoctorSpecialty" DROP CONSTRAINT "DoctorSpecialty_specialtyId_fkey";

-- DropTable
DROP TABLE "DoctorSpecialty";

-- DropTable
DROP TABLE "specialties";

-- CreateTable
CREATE TABLE "specialty" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "icons" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "specialty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctorSpecialty" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "specialtyId" TEXT NOT NULL,

    CONSTRAINT "doctorSpecialty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specialty_title_key" ON "specialty"("title");

-- CreateIndex
CREATE INDEX "specialty_is_deleted_index" ON "specialty"("isDeleted");

-- CreateIndex
CREATE INDEX "specialty_title_index" ON "specialty"("title");

-- CreateIndex
CREATE UNIQUE INDEX "doctorSpecialty_doctorId_specialtyId_key" ON "doctorSpecialty"("doctorId", "specialtyId");

-- AddForeignKey
ALTER TABLE "doctorSpecialty" ADD CONSTRAINT "doctorSpecialty_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctorSpecialty" ADD CONSTRAINT "doctorSpecialty_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "specialty"("id") ON DELETE CASCADE ON UPDATE CASCADE;
