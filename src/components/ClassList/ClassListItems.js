function ClassListItems({className, classAttributes, currentAttributes, setSelectedClass }) {
    const classReqMet = () => {
        const classKeys = Object.keys(classAttributes);
       
        //should also check if both list have the keys
        for (let key of classKeys) {
            if (!(key in currentAttributes) || classAttributes[key] > currentAttributes[key]) {
                return false;
            }
        }
        return true;
    }

    const textColor = classReqMet() ? 'red' : 'white';

    return (
      <li key={className} onClick={()=>setSelectedClass(className)} style={{ cursor: 'pointer', color: textColor }}>
        {className}
      </li>
    );
  }
  
  export default ClassListItems;