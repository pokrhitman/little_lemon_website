import GlobalStyles from '../styles/GlobalStyles';


export default function LittleLemonFooter() { 
    return ( 
    <View style={GlobalStyles.footerContainer}> 
        <Text style={GlobalStyles.footerText}> 
                All rights reserved by Little Lemon, 2025{' '} 
        </Text> 
    </View> 
    ); 
};