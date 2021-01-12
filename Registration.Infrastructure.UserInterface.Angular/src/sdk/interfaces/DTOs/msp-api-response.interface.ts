export interface MspApiResponse {
    success: boolean;
    message: string;
}

export interface MspApiResponseWithOutput<TOutput> extends MspApiResponse {
    result: TOutput;
  }
  