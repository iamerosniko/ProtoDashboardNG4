export class Project {
    constructor (
        public ProjectID : string,
        public ProjectName: string,
        public ProjectDatasource : string,
        public ProjectDatabasename : string,
        public ProjectUserID : string,
        public ProjectPassword : string,
        public ProjectIsActive: Boolean,
        public FrontEndPath: string,
        public BackEndPath: string
    ){}
}