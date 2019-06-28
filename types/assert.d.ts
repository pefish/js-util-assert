/**
 * 断言类
 */
export default class AssertUtil {
    /**
     * 不能为空（包括null、undefined、''）
     * @param value {any} 检测对象
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static notEmpty(value: any, key?: any, throw_?: boolean): boolean;
    static _isIllegal(value: any): boolean;
    /**
     * 至少有一个大写字母
     * @param value {any} 检测对象
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static oneUpperAtLeast(value: any, key?: any, throw_?: boolean): boolean;
    /**
     * 不能有空格
     * @param value {any} 检测对象
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static noSpace(value: any, key?: any, throw_?: boolean): boolean;
    /**
     * 至少一个数字
     * @param value {any} 检测对象
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static oneNumberAtLeast(value: any, key?: any, throw_?: boolean): boolean;
    /**
     * 至少一个标点符号
     * @param value {any} 检测对象
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static oneSymbolAtLeast(value: any, key?: any, throw_?: boolean): boolean;
    static _isType(value: any, typeName: any): boolean;
    /**
     * 能够强转
     * @param value {any} 检测对象
     * @param expectValue {string} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static canCast(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 判断类型
     * @param value {any} 检测对象
     * @param expectValue {string} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static isType(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 检测注入
     * @param value {any} 检测对象
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static noInject(value: any, key?: any, throw_?: boolean): boolean;
    /**
     * 大于指定值
     * @param value {any} 检测对象
     * @param expectValue {number} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static gt(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 大于或等于指定值
     * @param value {any} 检测对象
     * @param expectValue {number} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static gte(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 小于指定值
     * @param value {any} 检测对象
     * @param expectValue {number} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static lt(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 小于或等于指定值
     * @param value {any} 检测对象
     * @param expectValue {number} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static lte(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 长度小于指定值
     * @param value {any} 检测对象
     * @param expectValue {number} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static lengthLt(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 长度小于或等于指定值
     * @param value {any} 检测对象
     * @param expectValue {number} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static lengthLte(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 长度大于指定值
     * @param value {any} 检测对象
     * @param expectValue {number} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static lengthGt(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 长度大于或等于指定值
     * @param value {any} 检测对象
     * @param expectValue {number} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static lengthGte(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 是否以指定字符串开头
     * @param value {any} 检测对象
     * @param expectValue {string} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static startsWith(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 长度等于指定值
     * @param value {any} 检测对象
     * @param expectValue {number} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static lengthEq(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 元素存在于指定数组中
     * @param value {any} 检测对象
     * @param expectValue {array} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static in(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 强等于
     * @param value {any} 检测对象
     * @param expectValue {any} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static is(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
    /**
     * 是否是某自定义类型，如email、mobile
     * @param value {any} 检测对象
     * @param expectValue {string} 期望值
     * @param key {string} 表示检测对象的key
     * @param throw_ {boolean} 是否抛错
     * @returns {boolean}
     */
    static isCustomType(value: any, expectValue: any, key?: any, throw_?: boolean): boolean;
}
