export namespace BannerType {
  export interface IType {
    count: number;
    next: any;
    previous: any;
    results: [
      {
        id: number;
        image: string;
        title: string;
        order: number;
        active: boolean;
      }
    ];
  }
}
