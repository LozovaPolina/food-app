import TabsContainer from "./Tabs/TabContainer.tsx";

import { TAB_ITEM } from "../dummy-tabItems.ts";
import ContainerWrapper from "./UI/ContainerWrapper.tsx";

export default function Preview() {
  return (
    <ContainerWrapper
      wrapperClass='preview'
      bgColorClass='bgc_blue'
      divider={true}
    >
      <TabsContainer className='tabcontainer'>
        {TAB_ITEM.map((item) => (
          <TabsContainer.Item
            className='tabcontent'
            key={item.id}
            id={item.id}
            image={item.image}
          >
            <TabsContainer.ItemDescr
              className='tabcontent__descr'
              descr={item.descr}
            />
          </TabsContainer.Item>
        ))}

        <TabsContainer.Header
          className='tabheader'
          title='Select question style'
        >
          <TabsContainer.HeaderItemWrapper className='tabheader__items'>
            {TAB_ITEM.map((item) => (
              <TabsContainer.HeaderItem
                className='tabheader__item'
                activeClass='tabheader__item_active'
                key={item.id}
                id={item.id}
                title={item.title}
              ></TabsContainer.HeaderItem>
            ))}
          </TabsContainer.HeaderItemWrapper>
        </TabsContainer.Header>
      </TabsContainer>
      <div className='preview__life'>Live life to the fullest!</div>
    </ContainerWrapper>
  );
}
