import { Subject } from './Subject';

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
        firstName: string;
        lastName: string;
    }

    export class Java extends Subject {
        teacher: Teacher; // Add teacher property
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        setTeacher(teacher: Teacher): void { // Correct setTeacher method
            this.teacher = teacher;
        }

        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.experienceTeachingJava <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
