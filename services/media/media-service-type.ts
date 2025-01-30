export namespace MediaType {
  export interface IType {
    count: number;
    next: any;
    previous: any;
    results: [
      {
        id: number;
        image: string;
        order: number;
        active: boolean;
      }
    ];
  }
}
