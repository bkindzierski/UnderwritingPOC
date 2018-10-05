
export class QUESTION {
    
    ID: number;
    QUESTION: string;
    QUESORDER: number;
    ELEMENTTYPE: string;
    ANSWER: string;
    RULE: string;
    REQUIRED:string;    
    DATATYPE:number;
    DATALENGTH:number;
    SUBQUESTIONS: QUESTION[];
    OPTIONS:any[];
    FORMSTATUS:boolean;
  
    // constructor(options: {
    //     id?: string,
    //     question?: string,
    //     order?: number,
    //     elementType?: string,
    //     answer?: string,
    //     rule?: string,
    //     datatype?:string,
    //     datalength?:string,    
    //     subQuestions?: Question[]

    //   } = {}) {

    //     this.id = options.id;
    //     this.question = options.question;
    //     this.order= options.order;
    //     this.elementType= options.elementType;
    //     this.answer= options.answer; 
    //     this.rule= options.rule;
    //     this.datatype= options.datatype;
    //     this.datalength= options.datalength;
    //     this.subQuestions =options.subQuestions;
    // }

  }
  