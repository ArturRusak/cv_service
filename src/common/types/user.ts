export type EmploymentHistory = {
  companyName: string;
  endData: Date | null;
  position: string;
  startDate: Date;
};

export type Skill = {
  status: string;
  title: string;
};

export type UserData = EmploymentHistory &
  Skill & {
    avatar: File | null;
    birthDate: string;
    firstName: string;
    id?: string;
    lastName: string;
    profSummary: string;
  };
