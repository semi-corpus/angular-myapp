export enum TaskStatus {
    ToDo,
    Doing,
    Done
}

export class Task {
    src: string;
    name: string;
    status: TaskStatus;
    deadLine: Date;
    details: string;
}

