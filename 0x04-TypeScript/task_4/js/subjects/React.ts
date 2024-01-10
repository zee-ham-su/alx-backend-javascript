import { Subject } from './Subject';

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
        firstName: string;
        lastName: string;
    }

    export class React extends Subject {
        teacher: Teacher; // Add teacher property
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        setTeacher(teacher: Teacher): void { // Correct setTeacher method
            this.teacher = teacher;
        }

        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.experienceTeachingReact <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
