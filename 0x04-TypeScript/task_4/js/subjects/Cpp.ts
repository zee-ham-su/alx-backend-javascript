import { Subject } from './Subject';

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
        firstName: string;
        lastName: string;
    }

    export class Cpp extends Subject {
        teacher: Teacher; // Add teacher property
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        setTeacher(teacher: Teacher): void { // Correct setTeacher method
            this.teacher = teacher;
        }

        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}

