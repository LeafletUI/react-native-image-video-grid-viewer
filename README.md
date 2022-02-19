# React Native Image Video Grid Viewer

![alt text](https://github.com/LeafletUI/react-native-image-video-grid-viewer/blob/main/screenshots/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-02-19%20at%2016.33.24.png?raw=true)

This is a component for IOS and Android images and videos grid layout.

Can be installed in both Expo managed, bare and react-native cli

Checkout the demo here: [Image Video Grid Viewer Demo](https://youtu.be/urY03qCbVbo).


## Installation

```
yarn add @leafletui/rn-image-video-grid-viewer
```

```
npm install @leafletui/rn-image-video-grid-viewer
```

## Usage

### Props

| Props        | Default     | Options  |
| ------------- |:-------------:| -----:|
| tint      | dark | light, dark, default |
| transitionDuration     | 300      | custom in ms |

### Show me the code - here it is below:

```js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RNImageVideoGridViewer from "rn-image-video-grid-viewer";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <RNImageVideoGridViewer
          images={[
            { url: "https://images.unsplash.com/photo-1580465446361-8aae5321522b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c21pbGUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", type: "image", videoThumbnail: null },
            { url: "https://images.unsplash.com/photo-1529123202249-4f6224196c9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNtaWxlJTIwYmxhY2slMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", type: "video", videoThumbnail: "https://images.unsplash.com/photo-1601831698630-a814370b9cca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" },
            { url: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80", type: "image", videoThumbnail: null },
            { url: "https://images.unsplash.com/photo-1529123202249-4f6224196c9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNtaWxlJTIwYmxhY2slMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", type: "video", videoThumbnail: "https://images.unsplash.com/photo-1529123202249-4f6224196c9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNtaWxlJTIwYmxhY2slMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" },
            { url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", type: "image", videoThumbnail: null },
            { url: "https://images.unsplash.com/photo-1601831698630-a814370b9cca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", type: "video", videoThumbnail: "https://images.unsplash.com/photo-1601831698630-a814370b9cca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" },
            { url: "https://images.unsplash.com/photo-1529123202249-4f6224196c9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNtaWxlJTIwYmxhY2slMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", type: "image", videoThumbnail: null },


            { url: "https://images.unsplash.com/photo-1601831698630-a814370b9cca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", type: "video", videoThumbnail: "https://images.unsplash.com/photo-1601831698630-a814370b9cca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" },
            { url: "https://images.unsplash.com/photo-1601831698630-a814370b9cca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", type: "video", videoThumbnail: "https://images.unsplash.com/photo-1601831698630-a814370b9cca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" },
          ]}
        />
      </View>
      <Text style={[styles.textStyle, { marginTop: 50, fontWeight: 'bold' }]}>LeafletUI</Text>
      <Text style={styles.textStyle}>React Native Image-Video Grid Viewer library</Text>

      <Text style={{ textAlign: "center", fontSize: 15 }}>Please leave a github star</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  inner_container: {
    width: "100%",
    height: "60%",
  },
});

```



