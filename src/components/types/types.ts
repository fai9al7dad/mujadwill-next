export type importsStatus = {
  sections: boolean;
  instructors: boolean;
};

export type instructor = {
  id: number;
  name: string;
  max_hours: number;
  email: string;
};

export type Schedule = {
  conflict_fitness: number;
  fitness: number;
  fourDays_fitness: number;
  fullLoad_fitness: number;
  id: number;
  lab_fitness: number;
};
