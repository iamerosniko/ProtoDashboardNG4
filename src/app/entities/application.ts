export class Application {
    constructor (
        public AppID: number,//primary key
        public AppName: string,//foreign key
        public AppBU: number,
        public FrontTechnology: string,
        public FrontEndPath: string,
        public BackTechnology: string,
        public BackEndPath: string,
        public AppLifespan: number,
        public PrimaryBUContact: number,
        public SecondaryBUContact: number,
        public AppIsActive: Boolean,
        public AppPII: Boolean,
        public AppSecurity : string,
        public pt_detail_show: boolean,
        public pt_detail_onhold : Date,
        public pt_detail_reason : string,
        public pt_detail_progress : number,
        public pt_detail_entrytype : string
    ){}
}