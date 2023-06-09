import {defaultTheme, Flex, Heading, Provider, useListData, View} from '@adobe/react-spectrum';
import { DraggableListView } from './molecules/DraggableListView';
import { Draggable } from './atoms/Draggable';
import { Droppable } from './atoms/Droppable';
import { DraggableDroppable } from './molecules/DraggableDroppable';
import { MyListView } from './atoms/MyListView';
import { DroppableListView } from './molecules/DroppableListView';

export function App() {
  const initialItems = [
    {id: '1', name: 'Adobe Photoshop'},
    {id: '2', name: 'Adobe InDesign'},
    {id: '3', name: 'Adobe AfterEffects'},
    {id: '4', name: 'Adobe Illustrator'},
    {id: '5', name: 'Adobe Lightroom'},
  ]
  const myListViewLst = useListData({initialItems});
  const draggableListViewLst = useListData({initialItems});
  const droppableListViewLst_onDrop = useListData({initialItems});
  const droppableListViewLst_onInsert = useListData({initialItems});
  const droppableListViewLst_onRootDrop = useListData({initialItems});
  const droppableListViewLst_onItemDrop = useListData({initialItems});
  const droppableListViewLst_onReorder = useListData({initialItems});

  return (
    <Provider
      theme={defaultTheme}
      colorScheme='dark'
      minHeight="100vh"
    >
      <View padding="size-100">
        <Flex direction="column" maxWidth="1200px" gap="size-300" margin="0 auto">
          <View>
            <Heading level={1}>Atoms</Heading>
            <Flex direction="column" gap="size-300">
              <View>
                <Heading level={2}>ListView</Heading>
                <MyListView lst={myListViewLst} />
              </View>
              <View>
                <Heading level={2}>Draggable</Heading>
                <Draggable />
              </View>
              <View>
                <Heading level={2}>Droppable</Heading>
                <Droppable />
              </View>
            </Flex>
            <Heading level={1}>Molecules</Heading>
            <Flex direction="column" gap="size-300">
              <View>
                <Heading level={2}>DraggableDroppable</Heading>
                <DraggableDroppable />
              </View>
              <View>
                <Heading level={2}>DraggableListView</Heading>
                <DraggableListView lst={draggableListViewLst} />
              </View>
              <View>
                <Heading level={2}>DroppableListView [onDrop]</Heading>
                <DroppableListView lst={droppableListViewLst_onDrop} actions={["onDrop"]}/>
              </View>
              <View>
                <Heading level={2}>DroppableListView [onInsert]</Heading>
                <DroppableListView lst={droppableListViewLst_onInsert} actions={["onInsert"]}/>
              </View>
              <View>
                <Heading level={2}>DroppableListView [onRootDrop]</Heading>
                <DroppableListView lst={droppableListViewLst_onRootDrop} actions={["onRootDrop"]}/>
              </View>
              <View>
                <Heading level={2}>DroppableListView [onItemDrop]</Heading>
                <DroppableListView lst={droppableListViewLst_onItemDrop} actions={["onItemDrop"]}/>
              </View>
              <View>
                <Heading level={2}>DroppableListView [onReorder]</Heading>
                <DroppableListView lst={droppableListViewLst_onReorder} actions={["onReorder"]}/>
              </View>
            </Flex>
          </View>
        </Flex>
      </View>
    </Provider>
  );
}
