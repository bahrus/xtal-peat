import {xc, IReactor, PropAction, PropDef, PropDefMap, ReactiveSurface} from 'xtal-element/lib/XtalCore.js';

export class XtalPeat extends HTMLElement implements ReactiveSurface{
    static is = 'xtal-peat';
    self = this;
    propActions = propActions;
    reactor: IReactor = new xc.Rx(this);
    merge: string | undefined;
    into: string | undefined;
}
const propActions = [

] as PropAction[];
const baseProp : PropDef = {
    dry: true,
    async: true,
}
const reqStrProp: PropDef = {
    ...baseProp,
    stopReactionsIfFalsy: true,
    type: String
}
const propDefMap: PropDefMap<XtalPeat> = {
    merge: reqStrProp,
    into: reqStrProp
};
const slicedProps = xc.getSlicedPropDefs(propDefMap);
xc.letThereBeProps(XtalPeat, slicedProps);
xc.define(XtalPeat);