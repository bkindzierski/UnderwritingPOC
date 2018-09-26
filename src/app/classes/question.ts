
export class QUESTION {
    
    ID: number;
    QUESTION: string;
    ORDER: number;
    ELEMENTTYPE: string;
    ANSWER: string;
    RULE: string;
    REQUIRED:string;
    FORMSTATUS:boolean;
    DATATYPE:number;
    DATALENGTH:number;
    OPTIONS:any[];
    SUBQUESTIONS: QUESTION[];
    
  
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
  