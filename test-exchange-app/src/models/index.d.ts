import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ExInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MemInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ExInfo {
  readonly id: string;
  readonly TradeDate?: string | null;
  readonly TradeSts?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ExInfo, ExInfoMetaData>);
  static copyOf(source: ExInfo, mutator: (draft: MutableModel<ExInfo, ExInfoMetaData>) => MutableModel<ExInfo, ExInfoMetaData> | void): ExInfo;
}

export declare class MemInfo {
  readonly id: string;
  readonly MemCode: string;
  readonly MemName?: string | null;
  readonly MemDiv?: number | null;
  readonly StartDate?: string | null;
  readonly EndDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MemInfo, MemInfoMetaData>);
  static copyOf(source: MemInfo, mutator: (draft: MutableModel<MemInfo, MemInfoMetaData>) => MutableModel<MemInfo, MemInfoMetaData> | void): MemInfo;
}