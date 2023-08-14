import React, { forwardRef } from 'react';
import { Anchor, AutocompleteItem, Center, createStyles } from '@mantine/core';

export const ViewMoreItem = forwardRef<HTMLDivElement, AutocompleteItem>(
  ({ value, ...props }, ref) => {
    return (
      <Center ref={ref} {...props} key="view-more">
        <Anchor weight="bold" td="none !important">
          View more results
        </Anchor>
      </Center>
    );
  }
);

ViewMoreItem.displayName = 'SearchItem';

export const useSearchItemStyles = createStyles((theme) => ({
  highlighted: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.yellow[5] : theme.colors.yellow[2],
  },
}));
