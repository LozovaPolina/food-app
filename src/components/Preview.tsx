import TabsContainer from "./Tabs/TabContainer.tsx";

import { TAB_ITEM } from "../dummy-tabItems.ts";

export default function Preview() {
  return (
    <div className='preview'>
      <div className='bgc_blue'></div>
      <div className='container'>
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
      </div>
    </div>
  );
}
