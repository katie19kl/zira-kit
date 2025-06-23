# datePicker

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build datePicker` to build the library.

## Introduction

Date picker is another element we would like to export with the same behavior and styles for the group to use freely.

We wrapped `react-datepicker`'s `DatePickerComponent` with some of our functionality, styles and extentions and exported it out through multiple components:
`CalendarContainer`, `DatePicker`, `DateRangePicker`. Below we'll explain how to use them in your code.

#### Base Principles:

The type accepted for a single date are: `Date | null`. We use the name `DatePickerValue` for that type.
<br />
So for a range of dates: A tuple of the above: `[DatePickerValue, DatePickerValue]` (The first value is the start date and the second one is the end date).

## How to use?

### `<CalendarContainer />`

Let's start with the base component `<CalendarContainer />`:
<br />
This is the core-component that wraps `<DatePickerComponent />` of `react-datepicker`.
This component wraps only the package exported calendar and removes the input component (to replace it with ours with full control on it).
<br />
`<CalendarContainer />` should represent only the calendar as an inline component.
<br />

```typescript
// Its primary props are:
interface CalendarContainerProps {
    isRange: boolean; // if true, calendar supports a range of dates (and T = [DatePickerValue, DatePickerValue]), and if false, supports single date (and T = DatePickerValue)
    value: T; // displays that value on the calendar
    onChange?: (value: T) => void; // a callback fired after selecting (used to change an outer state)
    onApply?: (value: T) => void; // a callback fired when selection is done
    onSelect?: (date: Date) => void; // a callback fired when selecting a date on the calendar (used to change an internal state of a wrapper component)
    onReset?: () => void; // a callback fired when clicking the reset button
    minDate?: Date; // dates before that date are not allowed
    maxDate?: Date; // dates after that date are not allowed
    onClose?: () => void; // a callback fired when selection is done
    classNames?: {
        // an object of class names you can inject into the component
    }

    // there are more props that can serve you
    ...
}
```

> ❗ **Important**: Calendar's styles need to overridden. Copy `calendarContainer.scss` file and modify the classes styles to match for your desired styles.

### `<DatePicker />`

This component represenets a full date picker (input and calendar).
<br />
It accepts `DatePickerValue`. We'll mainly deal with the option to provide your own calendar:
<br />
`<DatePicker />` accepts a prop called `PickerComponent`. That prop is a component that must wrap `<CalendarContainer />` - extends its props. If you don't provide that prop. There is a default component that already uses `<CalendarContainer />`, and if you wish to override it - you can take inspiration from that component.

```typescript
// Its primary props are:
interface DatePickerProps {
    dateFormat?: string; // changes the format of the date in the input. defaults to 'dd/MM/yy'
    placeholder?: string; // when the value is null - placeholder value is shown. defaults to '--/--/--'
    label?: string; // a text that appears above the input
    icon?: string; // an icon that appears in the input
    disabled?: boolean;
    PickerComponent?: React.FC;
    ...
}
```

### `<DateRangePicker />`

This component represenets a full date range picker (input and calendar).
<br />
It accepts `[DatePickerValue, DatePickerValue]`. Just like `<DatePicker />` - this component also accepts the prop `PickerComponent` and has it own default (if not provided).

```typescript
// Its primary props are:
interface DateRangePickerProps {
    dateFormat?: string; // changes the format of the date in the input. defaults to 'dd/MM/yy'
    placeholder?: string; // when the value is null - placeholder value is shown. defaults to '--/--/--'
    label?: string; // a text that appears above the input
    icon?: string; // an icon that appears in the input
    disabled?: boolean;
    PickerComponent?: React.FC;
    ...
}
```
