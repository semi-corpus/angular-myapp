export enum TaskStatus {
    ToDo = 'To Start',
    Doing = 'Doing',
    Done  = 'Done'
}

export class Task {
    src: string;
    name: string;
    status: TaskStatus;
    deadLine: Date;
    details: string;
    //constructor(public doer: string){}
}

