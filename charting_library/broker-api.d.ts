// Generated by dts-bundle-generator v5.3.0

export declare const enum ConnectionStatus {
	Connected = 1,
	Connecting = 2,
	Disconnected = 3,
	Error = 4
}
export declare const enum ConnectionType {
	Demo = 1,
	Real = 0
}
export declare const enum NotificationType {
	Error = 0,
	Success = 1
}
export declare const enum OrderStatus {
	Canceled = 1,
	Filled = 2,
	Inactive = 3,
	Placing = 4,
	Rejected = 5,
	Working = 6
}
export declare const enum OrderStatusFilter {
	All = 0,
	Canceled = 1,
	Filled = 2,
	Inactive = 3,
	Rejected = 5,
	Working = 6
}
export declare const enum OrderTicketFocusControl {
	LimitPrice = 1,
	StopPrice = 2,
	TakeProfit = 3,
	StopLoss = 4,
	Quantity = 5
}
export declare const enum OrderType {
	Limit = 1,
	Market = 2,
	Stop = 3,
	StopLimit = 4
}
export declare const enum ParentType {
	Order = 1,
	Position = 2,
	Trade = 3
}
export declare const enum Side {
	Buy = 1,
	Sell = -1
}
export declare const enum StandardFormatterName {
	Date = "date",
	DateOrDateTime = "dateOrDateTime",
	Default = "default",
	Fixed = "fixed",
	VariablePrecision = "variablePrecision",
	FormatQuantity = "formatQuantity",
	FormatPrice = "formatPrice",
	FormatPriceForexSup = "formatPriceForexSup",
	IntegerSeparated = "integerSeparated",
	LocalDate = "localDate",
	LocalDateOrDateTime = "localDateOrDateTime",
	OrderSettings = "orderSettings",
	Percentage = "percentage",
	Pips = "pips",
	Profit = "profit",
	ProfitInInstrumentCurrency = "profitInInstrumentCurrency",
	PosSettings = "posSettings",
	Side = "side",
	PositionSide = "positionSide",
	Status = "status",
	Symbol = "symbol",
	Text = "text",
	TextNoWrap = "textNoWrap",
	TradeSettings = "tradeSettings",
	Type = "type",
	MarginPercent = "marginPercent"
}
export declare enum OrderOrPositionMessageType {
	Information = "information",
	Warning = "warning",
	Error = "error"
}
export declare enum StopType {
	StopLoss = 0,
	TrailingStop = 1
}
export declare type AccountId = Nominal<string, "AccountID">;
export declare type ActionMetaInfo = ActionDescriptionWithCallback | MenuSeparator;
export declare type CellAlignment = "left" | "right";
export declare type CustomFieldPossibleTypes = "TextWithCheckBox" | "ComboBox";
export declare type INumberFormatter = IFormatter<number>;
export declare type InputFieldValidator = (value: any) => InputFieldValidatorResult;
export declare type InputFieldValidatorResult = PositiveBaseInputFieldValidatorResult | NegativeBaseInputFieldValidatorResult;
export declare type LanguageCode = "ar" | "zh" | "cs" | "da_DK" | "nl_NL" | "en" | "et_EE" | "fr" | "de" | "el" | "he_IL" | "hu_HU" | "id_ID" | "it" | "ja" | "ko" | "fa" | "pl" | "pt" | "ro" | "ru" | "sk_SK" | "es" | "sv" | "th" | "tr" | "vi" | "no" | "ms_MY" | "zh_TW";
/**
 * This is the generic type useful for declaring a nominal type,
 * which does not structurally matches with the base type and
 * the other types declared over the same base type
 *
 * Usage:
 * @example
 * type Index = Nominal<number, 'Index'>;
 * // let i: Index = 42; // this fails to compile
 * let i: Index = 42 as Index; // OK
 * @example
 * type TagName = Nominal<string, 'TagName'>;
 */
export declare type Nominal<T, Name extends string> = T & {
	[Symbol.species]: Name;
};
export declare type Order = PlacedOrder | BracketOrder;
export declare type SymbolType = "stock" | "index" | "forex" | "futures" | "bitcoin" | "crypto" | "undefined" | "expression" | "spread" | "cfd" | "economic" | "equity" | "dr" | "bond" | "right" | "warrant" | "fund" | "structured";
export declare type TextInputFieldValidator = (value: string) => InputFieldValidatorResult;
export declare type TradableSolutions = ChangeAccountSolution | ChangeSymbolSolution;
export declare type TradingDialogCustomField = TextWithCheckboxFieldMetaInfo | CustomComboBoxMetaInfo;
export declare type WatchedValueCallback<T> = (value: T) => void;
export interface AccountManagerColumn {
	label: string;
	alignment?: CellAlignment;
	formatter?: StandardFormatterName | "orderSettings" | "posSettings" | string;
	property: string;
	sortProp?: string;
	notSortable?: boolean;
	help?: string;
	highlightDiff?: boolean;
	notHideable?: boolean;
	hideByDefault?: boolean;
	tooltipProperty?: string;
	isCapitalize?: boolean;
	showZeroValues?: boolean;
}
export interface AccountManagerInfo {
	accountTitle: string;
	summary: AccountManagerSummaryField[];
	orderColumns: OrderTableColumn[];
	orderColumnsSorting?: SortingParameters;
	historyColumns?: AccountManagerColumn[];
	historyColumnsSorting?: SortingParameters;
	positionColumns?: AccountManagerColumn[];
	tradeColumns?: AccountManagerColumn[];
	pages: AccountManagerPage[];
	possibleOrderStatuses?: OrderStatus[];
	marginUsed?: IWatchedValue<number>;
	contextMenuActions?(contextMenuEvent: MouseEvent | TouchEvent, activePageActions: ActionMetaInfo[]): Promise<ActionMetaInfo[]>;
}
export interface AccountManagerPage {
	id: string;
	title: string;
	tables: AccountManagerTable[];
}
export interface AccountManagerSummaryField {
	text: string;
	wValue: IWatchedValueReadonly<any>;
	formatter?: string;
}
export interface AccountManagerTable {
	id: string;
	title?: string;
	columns: AccountManagerColumn[];
	initialSorting?: SortingParameters;
	changeDelegate: ISubscription<(data: {}) => void>;
	flags?: AccountManagerTableFlags;
	getData(paginationLastId?: string | number): Promise<{}[]>;
}
export interface AccountManagerTableFlags {
	supportPagination?: boolean;
}
export interface AccountMetainfo {
	id: AccountId;
	name: string;
	currency?: string;
	currencySign?: string;
}
export interface ActionDescription {
	text?: "-" | string;
	separator?: boolean;
	shortcut?: string;
	tooltip?: string;
	checked?: boolean;
	checkedStateSource?: () => boolean;
	checkable?: boolean;
	enabled?: boolean;
	externalLink?: boolean;
	icon?: string;
}
export interface ActionDescriptionWithCallback extends ActionDescription {
	action: (a?: ActionDescription) => void;
}
export interface BaseInputFieldValidatorResult {
	valid: boolean;
}
export interface BracketOrder extends PlacedOrder {
	parentId: string;
	parentType: ParentType;
}
export interface Brackets {
	stopLoss?: number;
	takeProfit?: number;
	trailingStopPips?: number;
}
export interface BrokerConfigFlags {
	supportDisplayBrokerNameInSymbolSearch?: boolean;
	showQuantityInsteadOfAmount?: boolean;
	supportOrderBrackets?: boolean;
	supportTrailingStop?: boolean;
	supportPositions?: boolean;
	supportPositionBrackets?: boolean;
	supportTradeBrackets?: boolean;
	supportTrades?: boolean;
	supportClosePosition?: boolean;
	supportCloseTrade?: boolean;
	supportEditAmount?: boolean;
	supportLevel2Data?: boolean;
	supportDOM?: boolean;
	supportMultiposition?: boolean;
	supportPLUpdate?: boolean;
	supportReversePosition?: boolean;
	supportNativeReversePosition?: boolean;
	supportMarketOrders?: boolean;
	supportLimitOrders?: boolean;
	supportStopOrders?: boolean;
	supportStopLimitOrders?: boolean;
	supportDemoLiveSwitcher?: boolean;
	supportMarketBrackets?: boolean;
	supportSymbolSearch?: boolean;
	supportModifyDuration?: boolean;
	supportModifyOrder?: boolean;
	supportModifyTrailingStop?: boolean;
	supportMargin?: boolean;
	calculatePLUsingLast?: boolean;
	supportPlaceOrderPreview?: boolean;
	supportModifyOrderPreview?: boolean;
	supportOrdersHistory?: boolean;
	supportAddBracketsToExistingOrder?: boolean;
	supportBalances?: boolean;
	closePositionCancelsOrders?: boolean;
	supportOnlyPairPositionBrackets?: boolean;
	supportCryptoExchangeOrderTicket?: boolean;
	supportConfirmations?: boolean;
	/** Does broker need to display position's PL in instrument's currency */
	positionPLInInstrumentCurrency?: boolean;
	/** Does broker support partial position closing */
	supportPartialClosePosition?: boolean;
	/** Does broker support partial trade closing */
	supportPartialCloseTrade?: boolean;
	/** Cancelling a bracket cancels it's oco pair */
	supportCancellingBothBracketsOnly?: boolean;
	/** Does broker support crypto brackets */
	supportCryptoBrackets?: boolean;
	/** Does broker need to show notifications log */
	showNotificationsLog?: boolean;
	/**
	 * Whether stop orders should behave like Market-if-touched in both directions.
	 * Enabling this flag removes the direction check from the order dialog.
	 */
	supportStopOrdersInBothDirections?: boolean;
	/** Does broker support executions */
	supportExecutions?: boolean;
	requiresFIFOCloseTrades?: boolean;
	/**
	 * @deprecated
	 */
	supportBrackets?: boolean;
}
export interface BrokerCustomUI {
	showOrderDialog?: (order: OrderTemplate | Order, focus?: OrderTicketFocusControl) => Promise<boolean>;
	showPositionDialog?: (position: Position | Trade, brackets: Brackets, focus?: OrderTicketFocusControl) => Promise<boolean>;
	showCancelOrderDialog?: (order: Order) => Promise<boolean>;
	showClosePositionDialog?: (position: Position) => Promise<boolean>;
}
export interface ChangeAccountSolution {
	changeAccount: AccountId;
}
export interface ChangeSymbolSolution {
	changeSymbol: string;
}
export interface CryptoBalance {
	symbol: string;
	total: number;
	available: number;
	reserved?: number;
	value?: number;
	valueCurrency?: string;
	longName?: string;
	btcValue?: number;
}
export interface CustomComboBoxItem {
	text: string;
	value: string;
}
export interface CustomComboBoxMetaInfo extends CustomInputFieldMetaInfo {
	inputType: "ComboBox";
	items: CustomComboBoxItem[];
}
export interface CustomFields {
	[key: string]: any;
}
export interface CustomInputFieldMetaInfo {
	inputType: string;
	id: string;
	title: string;
	preventModify?: boolean;
	placeHolder?: string;
	value?: any;
	validator?: InputFieldValidator;
	customInfo?: any;
	saveToSettings?: boolean;
}
export interface CustomInputFieldsValues {
	[fieldId: string]: TextWithCheckboxValue | string | any;
}
export interface DOMData {
	snapshot: boolean;
	asks: DOMLevel[];
	bids: DOMLevel[];
}
export interface DOMLevel {
	price: number;
	volume: number;
}
export interface DefaultContextMenuActionsParams {
}
export interface DefaultDropdownActionsParams {
	tradingProperties?: boolean;
	showHowToUse?: boolean;
	restoreConfirmations?: boolean;
}
export interface ErrorFormatterParseResult extends FormatterParseResult {
	error?: string;
	res: false;
}
export interface Execution extends CustomFields {
	symbol: string;
	price: number;
	qty: number;
	side: Side;
	time: number;
}
export interface FormatterParseResult {
	res: boolean;
}
export interface IBoxedValue<T> extends IBoxedValueReadOnly<T> {
	setValue(value: T): void;
}
export interface IBoxedValueReadOnly<T> {
	value(): T;
}
export interface IBrokerCommon {
	chartContextMenuActions(context: TradeContext, options?: DefaultContextMenuActionsParams): Promise<ActionMetaInfo[]>;
	isTradable(symbol: string): Promise<boolean | IsTradableResult>;
	connectionStatus(): ConnectionStatus;
	orders(): Promise<Order[]>;
	ordersHistory?(): Promise<Order[]>;
	positions?(): Promise<Position[]>;
	trades?(): Promise<Trade[]>;
	executions(symbol: string): Promise<Execution[]>;
	symbolInfo(symbol: string): Promise<InstrumentInfo>;
	accountManagerInfo(): AccountManagerInfo;
	formatter?(symbol: string, alignToMinMove: boolean): Promise<INumberFormatter>;
	spreadFormatter?(symbol: string): Promise<INumberFormatter>;
	quantityFormatter?(symbol: string): Promise<INumberFormatter>;
	getOrderDialogOptions?(symbol: string): Promise<OrderDialogOptions | undefined>;
	getPositionDialogOptions?(): PositionDialogOptions | undefined;
}
export interface IBrokerConnectionAdapterFactory {
	createDelegate<T extends Function>(): IDelegate<T>;
	createWatchedValue<T>(value?: T): IWatchedValue<T>;
	createPriceFormatter(priceScale?: number, minMove?: number, fractional?: boolean, minMove2?: number): IPriceFormatter;
}
export interface IBrokerConnectionAdapterHost {
	factory: IBrokerConnectionAdapterFactory;
	defaultFormatter(symbol: string, alignToMinMove: boolean): Promise<INumberFormatter>;
	numericFormatter(decimalPlaces: number): Promise<INumberFormatter>;
	quantityFormatter(decimalPlaces?: number): Promise<INumberFormatter>;
	defaultContextMenuActions(context: TradeContext, params?: DefaultContextMenuActionsParams): Promise<ActionMetaInfo[]>;
	defaultDropdownMenuActions(options?: Partial<DefaultDropdownActionsParams>): ActionMetaInfo[];
	sellBuyButtonsVisibility(): IWatchedValue<boolean> | null;
	domPanelVisibility(): IWatchedValue<boolean> | null;
	orderPanelVisibility(): IWatchedValue<boolean> | null;
	silentOrdersPlacement(): IWatchedValue<boolean>;
	patchConfig(config: Partial<BrokerConfigFlags>): void;
	setDurations(durations: OrderDurationMetaInfo[]): void;
	orderUpdate(order: Order): void;
	orderPartialUpdate(id: string, orderChanges: Partial<Order>): void;
	positionUpdate(position: Position, isHistoryUpdate?: boolean): void;
	positionPartialUpdate(id: string, positionChanges: Partial<Position>): void;
	tradeUpdate(trade: Trade, isHistoryUpdate?: boolean): void;
	tradePartialUpdate(id: string, tradeChanges: Partial<Trade>): void;
	executionUpdate(execution: Execution): void;
	currentAccountUpdate(): void;
	realtimeUpdate(symbol: string, data: TradingQuotes): void;
	plUpdate(positionId: string, pl: number): void;
	pipValueUpdate(symbol: string, pipValues: PipValues): void;
	tradePLUpdate(tradeId: string, pl: number): void;
	equityUpdate(equity: number): void;
	marginAvailableUpdate(marginAvailable: number): void;
	cryptoBalanceUpdate(symbol: string, balance: CryptoBalance): void;
	domeUpdate(symbol: string, equity: DOMData): void;
	showOrderDialog?<T extends PreOrder>(order: T, focus?: OrderTicketFocusControl): Promise<boolean>;
	showNotification(title: string, text: string, notificationType?: NotificationType): void;
	showCancelOrderDialog(orderId: string, handler: () => Promise<void>): Promise<void>;
	showCancelMultipleOrdersDialog(symbol: string, side: Side, qty: number, handler: () => Promise<void>): Promise<void>;
	showCancelBracketsDialog(orderId: string, handler: () => Promise<void>): Promise<void>;
	showCancelMultipleBracketsDialog(orderId: string, handler: () => Promise<void>): Promise<void>;
	showReversePositionDialog(position: string, handler: () => Promise<boolean>): Promise<boolean>;
	showPositionBracketsDialog(position: Position | Trade, brackets: Brackets, focus: OrderTicketFocusControl): Promise<boolean>;
	setButtonDropdownActions(descriptions: ActionMetaInfo[]): void;
	activateBottomWidget(): Promise<void>;
	showTradingProperties(): void;
	suggestedQty(): SuggestedQuantity;
	getSymbolMinTick(symbol: string): Promise<number>;
	showMessageDialog(title: string, text: string, textHasHTML: boolean): void;
	showConfirmDialog(title: string, content: string | string[], mainButtonText?: string, cancelButtonText?: string, showDisableConfirmationsCheckbox?: boolean): Promise<boolean>;
	showSimpleConfirmDialog(title: string, content: string | string[], mainButtonText?: string, cancelButtonText?: string, showDisableConfirmationsCheckbox?: boolean): Promise<boolean>;
}
export interface IBrokerTerminal extends IBrokerWithoutRealtime {
	subscribeRealtime(symbol: string): void;
	unsubscribeRealtime(symbol: string): void;
}
export interface IBrokerWithoutRealtime extends IBrokerCommon {
	subscribeDOME?(symbol: string): void;
	unsubscribeDOME?(symbol: string): void;
	placeOrder(order: PreOrder, confirmId?: string): Promise<PlaceOrderResult>;
	previewOrder?(order: PreOrder): Promise<OrderPreviewResult>;
	modifyOrder(order: Order, confirmId?: string): Promise<void>;
	cancelOrder(orderId: string): Promise<void>;
	cancelOrders(symbol: string, side: Side | undefined, ordersIds: string[]): Promise<void>;
	reversePosition?(positionId: string): Promise<void>;
	closePosition?(positionId: string, amount?: number): Promise<void>;
	closeTrade?(tradeId: string, amount?: number): Promise<void>;
	editPositionBrackets?(positionId: string, brackets: Brackets, customFields?: CustomInputFieldsValues): Promise<void>;
	editTradeBrackets?(tradeId: string, brackets: Brackets): Promise<void>;
	/**
	 * @deprecated Brokers should always send PL and equity updates
	 */
	subscribePL?(positionId: string): void;
	subscribeEquity?(): void;
	subscribeMarginAvailable?(symbol: string): void;
	subscribePipValue?(symbol: string): void;
	unsubscribePipValue?(symbol: string): void;
	unsubscribeMarginAvailable?(symbol: string): void;
	/**
	 * @deprecated
	 */
	unsubscribePL?(positionId: string): void;
	unsubscribeEquity?(): void;
}
export interface IDelegate<TFunc extends Function> extends ISubscription<TFunc> {
	fire: TFunc;
}
export interface IFormatter<T> {
	format(value?: T): string;
	parse?(value: string): ErrorFormatterParseResult | SuccessFormatterParseResult<T>;
}
export interface IObservable<T> {
	subscribe(callback: (value: T) => void): void;
	unsubscribe(callback: (value: T) => void): void;
}
export interface IObservableValue<T> extends IBoxedValue<T>, IObservable<T> {
}
export interface IObservableValueReadOnly<T> extends IBoxedValueReadOnly<T>, IObservable<T> {
}
export interface IPriceFormatter extends ISymbolValueFormatter {
	format(price: number, signPositive?: boolean, tailSize?: number, signNegative?: boolean, useRtlFormat?: boolean): string;
}
export interface ISubscription<TFunc extends Function> {
	subscribe(obj: object | null, member: TFunc, singleshot?: boolean): void;
	unsubscribe(obj: object | null, member: TFunc): void;
	unsubscribeAll(obj: object | null): void;
}
export interface ISymbolValueFormatter {
	format(price: number, signPositive?: boolean): string;
}
export interface IWatchedValue<T> extends IWatchedValueReadonly<T>, IObservableValue<T> {
	setValue(value: T, forceUpdate?: boolean): void;
	subscribe(callback: WatchedValueCallback<T>, options?: WatchedValueSubscribeOptions): void;
	unsubscribe(callback?: WatchedValueCallback<T> | null): void;
}
export interface IWatchedValueReadonly<T> extends IObservableValueReadOnly<T> {
	subscribe(callback: (value: T) => void, options?: WatchedValueSubscribeOptions): void;
	unsubscribe(callback?: ((value: T) => void) | null): void;
}
export interface InstrumentInfo {
	qty: QuantityMetainfo;
	pipValue: number;
	pipSize: number;
	minTick: number;
	lotSize?: number;
	type?: SymbolType;
	units?: string;
	brokerSymbol?: string;
	description: string;
	domVolumePrecision?: number;
	leverage?: string;
	marginRate?: number;
	limitPriceStep?: number;
	stopPriceStep?: number;
	allowedDurations?: string[];
	currency?: string;
	baseCurrency?: string;
	quoteCurrency?: string;
	bigPointValue?: number;
}
export interface IsTradableResult {
	tradable: boolean;
	reason?: string;
	solutions?: TradableSolutions;
	shortReason?: string;
}
export interface MenuSeparator extends ActionDescription {
	separator: boolean;
}
export interface NegativeBaseInputFieldValidatorResult extends BaseInputFieldValidatorResult {
	valid: false;
	errorMessage: string;
}
export interface OrderDialogOptions extends TradingDialogOptions {
}
export interface OrderDuration {
	/**
	 * type is OrderDurationMetaInfo.value
	 */
	type: string;
	datetime?: number;
}
export interface OrderDurationMetaInfo {
	hasDatePicker?: boolean;
	hasTimePicker?: boolean;
	default?: boolean;
	name: string;
	value: string;
	supportedOrderTypes?: OrderType[];
}
export interface OrderOrPositionMessage {
	type: OrderOrPositionMessageType;
	text: string;
}
export interface OrderPreviewResult {
	sections: OrderPreviewSection[];
	confirmId?: string;
	warnings?: string[];
	errors?: string[];
}
export interface OrderPreviewSection {
	rows: OrderPreviewSectionRow[];
	header?: string;
}
export interface OrderPreviewSectionRow {
	title: string;
	value: string;
}
export interface OrderRule {
	id: string;
	severity: "warning" | "error";
}
export interface OrderTableColumn extends AccountManagerColumn {
	supportedStatusFilters?: OrderStatusFilter[];
}
/**
 * Input value of the order ticket
 * This info is not sufficient to place an order
 */
export interface OrderTemplate {
	symbol: string;
	type?: OrderType;
	side?: Side;
	qty?: number;
	stopPrice?: number;
	limitPrice?: number;
	takeProfit?: number;
	stopLoss?: number;
	trailingStopPips?: number;
	duration?: OrderDuration;
	customFields?: CustomInputFieldsValues;
}
export interface PipValues {
	buyPipValue: number;
	sellPipValue: number;
}
export interface PlaceOrderResult {
	orderId?: string;
}
/**
 * Info about a placed order
 */
export interface PlacedOrder extends CustomFields {
	id: string;
	symbol: string;
	type: OrderType;
	side: Side;
	qty: number;
	status: OrderStatus;
	stopLoss?: number;
	trailingStopPips?: number;
	stopType?: StopType;
	takeProfit?: number;
	duration?: OrderDuration;
	customFields?: CustomInputFieldsValues;
	filledQty?: number;
	avgPrice?: number;
	updateTime?: number; /** unix timestamp in milliseconds */
	limitPrice?: number;
	stopPrice?: number;
	message?: OrderOrPositionMessage;
}
export interface Position {
	id: string;
	symbol: string;
	qty: number;
	shortQty?: number;
	longQty?: number;
	side: Side;
	avgPrice: number;
	message?: OrderOrPositionMessage;
	[key: string]: any;
}
export interface PositionDialogOptions extends TradingDialogOptions {
}
export interface PositiveBaseInputFieldValidatorResult extends BaseInputFieldValidatorResult {
	valid: true;
}
/**
 * Output value of the order ticket and input value of the broker's place order command
 * This info is sufficient to place an order
 */
export interface PreOrder extends OrderTemplate {
	symbol: string;
	type: OrderType;
	side: Side;
	qty: number;
	seenPrice: number | null;
	isClose?: boolean;
}
export interface QuantityMetainfo {
	min: number;
	max: number;
	step: number;
	uiStep?: number;
	default?: number;
}
export interface SingleBrokerMetaInfo {
	configFlags: BrokerConfigFlags;
	customNotificationFields?: string[];
	durations?: OrderDurationMetaInfo[];
	positionDialogOptions?: PositionDialogOptions;
	orderRules?: OrderRule[];
	customUI?: BrokerCustomUI;
}
export interface SortingParameters {
	columnId: string;
	asc?: boolean;
}
export interface SuccessFormatterParseResult<T> extends FormatterParseResult {
	res: true;
	value: T;
	suggest?: string;
}
export interface SuggestedQuantity {
	changed: IDelegate<(symbol: string) => void>;
	value(symbol: string): Promise<number>;
	setValue(symbol: string, value: number): void;
}
export interface TextWithCheckboxFieldCustomInfo {
	checkboxTitle: string;
	asterix?: boolean;
}
export interface TextWithCheckboxFieldMetaInfo extends CustomInputFieldMetaInfo {
	inputType: "TextWithCheckBox";
	value: TextWithCheckboxValue;
	customInfo: TextWithCheckboxFieldCustomInfo;
	validator?: TextInputFieldValidator;
}
export interface TextWithCheckboxValue {
	text: string;
	checked: boolean;
}
export interface Trade extends CustomFields {
	id: string;
	date: number;
	symbol: string;
	qty: number;
	side: Side;
	price: number;
}
export interface TradeContext {
	symbol: string;
	displaySymbol: string;
	value: number | null;
	formattedValue: string;
	last: number;
}
export interface TradingDialogOptions {
	customFields?: TradingDialogCustomField[];
}
export interface TradingQuotes {
	trade?: number;
	size?: number;
	bid?: number;
	bid_size?: number;
	ask?: number;
	ask_size?: number;
	spread?: number;
	isDelayed?: boolean;
}
export interface WatchedValueSubscribeOptions {
	once?: boolean;
	callWithLast?: boolean;
}

export as namespace TradingView;

export {};
