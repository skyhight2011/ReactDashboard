import { Box, Container, Grid, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent, useState } from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';




const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;

export default function UserStatusFiler() {
    const [currentTab, setCurrentTab] = useState<string>('all');

    const tabs = [
        { value: 'all', label: 'All Users' },
        { value: 'custonmer', label: 'Customers' },
        { value: 'admin', label: 'Administrators' },
        { value: 'subcribers', label: 'Subcribers' }
      ];

    const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
        setCurrentTab(value);
      };


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom:'27px',
        }}>
        <Container maxWidth='lg'>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
            <Grid item xs={12}>
            <TabsUnstyled defaultValue={0}>
                <TabsList >
                    {tabs.map((tab) => (
                        <Tab key={tab.value} value={tab.value}>{tab.label}</Tab>
                    ))}
                </TabsList>
            </TabsUnstyled>

            </Grid>
        </Grid>
        </Container>
        </Box>
    )
}