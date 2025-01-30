export namespace SliderType {
  export interface IType {
    count: number;
    next: any;
    previous: any;
    results: [
      {
        id: number;
        image: string;
        title: {
          en: string;
          ru: string;
        };
        order: number;
        active: boolean;
      }
    ];
  }
}
