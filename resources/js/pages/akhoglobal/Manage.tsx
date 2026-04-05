
import { type InertiaConfig } from '@inertiajs/core';
import React, { useCallback, type FunctionComponent } from "react";
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';


const Manage: FunctionComponent<InertiaConfig['sharedPageProps']> = () => {
  const listData: { label: string; value: string }[] = [
    { label: 'option1', value: '1' },
    { label: 'option2', value: '2' },
    { label: 'option3', value: '3' },
    { label: 'option4', value: '4' },
  ];
  const [value, setValue] = React.useState<string | null>(null);

  const handleSelect = useCallback((value: string | null) => {
    setValue(value);
  }, []);

  return (
    <div>
      <h3>the page of manage</h3>
      <Checkbox defaultChecked onCheckedChange={(value) => {
        console.log(value);
      }}></Checkbox>
      <Button>
        <span>demo btn</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger >
          <DropdownMenuLabel>{listData.find((item) => item.value === value)?.label || 'Select an option'}</DropdownMenuLabel>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent sideOffset={5}>
            <DropdownMenuItem onSelect={() => {
              handleSelect(null);
            }}>...</DropdownMenuItem>
            {listData.map((item) => <DropdownMenuItem key={item.value} onSelect={() => {
              handleSelect(item.value)
            }} textValue={item.value}>{item.label}</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  )
}

export default Manage;