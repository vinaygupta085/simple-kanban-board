export enum Stage {
	ToDO = 1,
	Implementing = 2,
	Done = 3
}

export interface TaskInfo {
	id: number;
	name: string;
	description?: string;
  sortOrder?: number;
	owner?: string;
	stage?: Stage;
	new?: boolean;
}
