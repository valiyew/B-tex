export namespace ProductType {
  export interface IType {
    count: number;
    next: any;
    previous: any;
    results: [
      {
        id: number;
        image: string;
        products: [
          {
            id: number;
            image: string;
            title: string;
            description: string;
            order: string;
            active: boolean;
            category: number;
          }
        ];
        title: string;
        order: number;
        active: true;
        description: string;
      }
    ];
  }
}
