import AttributeModifierListItem from './AttributeListItem.js';

function AttributeList({changeAttributePoints, attributePointList, attributeModifierList}) {
    return (
        <div>
            Attribute:
            <ul>
                {Object.entries(attributePointList).map(([attribute, value]) =>
                    <AttributeModifierListItem key={attribute} attribute = {attribute} value = {value}  changeAttributePoints={changeAttributePoints} modifier={attributeModifierList[attribute]}/>
                )}
            </ul>
        </div>
  );
}

export default AttributeList;