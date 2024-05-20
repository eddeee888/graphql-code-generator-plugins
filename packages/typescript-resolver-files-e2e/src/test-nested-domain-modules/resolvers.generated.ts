/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { school as Query_school } from './schools-domain/school/resolvers/Query/school';
import { schools as Query_schools } from './schools-domain/school/resolvers/Query/schools';
import { student as Query_student } from './students-domain/student/resolvers/Query/student';
import { teacher as Query_teacher } from './teachers-domain/teacher/resolvers/Query/teacher';
import { createSchoolCourse as Mutation_createSchoolCourse } from './schools-domain/course/resolvers/Mutation/createSchoolCourse';
import { profileChanges as Subscription_profileChanges } from './students-domain/profile/resolvers/Subscription/profileChanges';
import { School as course_School } from './schools-domain/course/resolvers/School';
import { School as demographics_School } from './schools-domain/demographics/resolvers/School';
import { School as school_School } from './schools-domain/school/resolvers/School';
import { SchoolCourse } from './schools-domain/course/resolvers/SchoolCourse';
import { SchoolDemographics } from './schools-domain/demographics/resolvers/SchoolDemographics';
import { Student as guardians_Student } from './students-domain/guardians/resolvers/Student';
import { Student as student_Student } from './students-domain/student/resolvers/Student';
import { Student as profile_Student } from './students-domain/profile/resolvers/Student';
import { StudentAvatar } from './students-domain/avatar/resolvers/StudentAvatar';
import { StudentGuardian } from './students-domain/guardians/resolvers/StudentGuardian';
import { StudentProfile as avatar_StudentProfile } from './students-domain/avatar/resolvers/StudentProfile';
import { StudentProfile as profile_StudentProfile } from './students-domain/profile/resolvers/StudentProfile';
import { Teacher as teacher_Teacher } from './teachers-domain/teacher/resolvers/Teacher';
import { Teacher as profile_Teacher } from './teachers-domain/profile/resolvers/Teacher';
import { TeacherAvatar } from './teachers-domain/avatar/resolvers/TeacherAvatar';
import { TeacherProfile as avatar_TeacherProfile } from './teachers-domain/avatar/resolvers/TeacherProfile';
import { TeacherProfile as profile_TeacherProfile } from './teachers-domain/profile/resolvers/TeacherProfile';
export const resolvers: Resolvers = {
  Query: {
    school: Query_school,
    schools: Query_schools,
    student: Query_student,
    teacher: Query_teacher,
  },
  Mutation: { createSchoolCourse: Mutation_createSchoolCourse },
  Subscription: { profileChanges: Subscription_profileChanges },
  School: { ...course_School, ...demographics_School, ...school_School },
  SchoolCourse: SchoolCourse,
  SchoolDemographics: SchoolDemographics,
  Student: { ...guardians_Student, ...student_Student, ...profile_Student },
  StudentAvatar: StudentAvatar,
  StudentGuardian: StudentGuardian,
  StudentProfile: { ...avatar_StudentProfile, ...profile_StudentProfile },
  Teacher: { ...teacher_Teacher, ...profile_Teacher },
  TeacherAvatar: TeacherAvatar,
  TeacherProfile: { ...avatar_TeacherProfile, ...profile_TeacherProfile },
};
