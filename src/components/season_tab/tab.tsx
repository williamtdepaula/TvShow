import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

interface ITabProps {
    title: string | undefined;
    focused: boolean;
};

const Tab: FC<ITabProps> = ({ title = '', focused }) => {
    return (
        <Text
            style={
                [
                    styles.txtTab,
                    {
                        fontWeight: focused ? 'bold' : 'normal',
                        padding: focused ? 0 : 0.4,
                    }
                ]
            }
        >
            {title}
        </Text>
    );
}

const styles = StyleSheet.create({
    txtTab: {
        fontSize: 18,
        color: "#fff",
    },
});

export default Tab;