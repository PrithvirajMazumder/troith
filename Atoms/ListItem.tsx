import React, { FunctionComponent } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { Avatar, Divider, Icon, ListItem as Item } from "react-native-elements";
import ListItemProps from "../interfaces/ListItemProps.interface";

function ListItem(props: ListItemProps) {
    return (
        <View>
            <Item
                Component={TouchableHighlight}
                containerStyle={{}}
                disabledStyle={{ opacity: 0.5 }}
                onLongPress={() => props.onLongPress && props.onLongPress()}
                onPress={() => props.onPress && props.onPress()}
                pad={10}
            >
                {props.avatar?.icon &&
                    <Avatar
                        icon={{
                            color: props.avatar.icon.color ?? "tomato",
                            name: props.avatar.icon.name,
                            type: props.avatar.icon.type,
                            size: 30
                        }}
                    />
                }
                {props.avatar?.img &&
                    <Avatar
                        source={{
                            uri: props.avatar.img,
                        }}
                    />
                }
                <Item.Content>
                    <Item.Title>
                        <Text>{props.title}</Text>
                    </Item.Title>
                    {props.subtitle &&
                        <Item.Subtitle>
                            <Text>{props.subtitle}</Text>
                        </Item.Subtitle>
                    }
                </Item.Content>
            </Item>
            <Divider
                style={{ width: "100%" }}
                color="#ebebeb"
                width={1}
                orientation="horizontal"
            />
        </View >
    );
}

export default ListItem;