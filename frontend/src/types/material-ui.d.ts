// Type definitions for material-ui 0.21
// Project: https://github.com/callemall/material-ui, http://material-ui.com
// Definitions by: Nathan Brown <https://github.com/ngbrown>
//                 Igor Beagorudsky <https://github.com/theigor>
//                 Ali Taheri Moghaddar <https://github.com/alitaheri>
//                 Oliver Herrmann <https://github.com/herrmanno>
//                 Daniel Roth <https://github.com/DaIgeb>
//                 Aurelién Allienne <https://github.com/allienna>
//                 Matthias Schlesinger <https://github.com/schlesingermatthias>
//                 Jonathon Kelly <https://github.com/InsidersByte>
//                 Artyom Stukans <https://github.com/artyomsv>
//                 Dan Jones <https://github.com/dan-j>
//                 Daisuke Mino <https://github.com/minodisk>
//                 Sam Walsh <https://github.com/samwalshnz>
//                 Tim de Koning <https://github.com/reggino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <referen

declare namespace MaterialUi {
    export import AppBar = __MaterialUi.AppBar;
    export import AppBarProps = __MaterialUi.AppBarProps;
    export import AutoComplete = __MaterialUi.AutoComplete;
    export import AutoCompleteProps = __MaterialUi.AutoCompleteProps;
    export import Avatar = __MaterialUi.Avatar;
    export import AvatarProps = __MaterialUi.AvatarProps;
    export import Badge = __MaterialUi.Badge;
    export import BadgeProps = __MaterialUi.BadgeProps;
    export import BottomNavigation = __MaterialUi.BottomNavigation.BottomNavigation;
    export import BottomNavigationProps = __MaterialUi.BottomNavigation.BottomNavigationProps;
    export import BottomNavigationItem = __MaterialUi.BottomNavigation.BottomNavigationItem;
    export import BottomNavigationItemProps = __MaterialUi.BottomNavigation.BottomNavigationItemProps;
    export import Card = __MaterialUi.Card.Card;
    export import CardProps = __MaterialUi.Card.CardProps;
    export import CardActions = __MaterialUi.Card.CardActions;
    export import CardActionsProps = __MaterialUi.Card.CardActionsProps;
    export import CardHeader = __MaterialUi.Card.CardHeader;
    export import CardHeaderProps = __MaterialUi.Card.CardHeaderProps;
    export import CardMedia = __MaterialUi.Card.CardMedia;
    export import CardMediaProps = __MaterialUi.Card.CardMediaProps;
    export import CardText = __MaterialUi.Card.CardText;
    export import CardTextProps = __MaterialUi.Card.CardTextProps;
    export import CardTitle = __MaterialUi.Card.CardTitle;
    export import CardTitleProps = __MaterialUi.Card.CardTitleProps;
    export import Checkbox = __MaterialUi.Switches.Checkbox;
    export import CheckboxProps = __MaterialUi.Switches.CheckboxProps;
    export import Chip = __MaterialUi.Chip;
    export import ChipProps = __MaterialUi.ChipProps;
    export import CircularProgress = __MaterialUi.CircularProgress;
    export import CircularProgressProps = __MaterialUi.CircularProgressProps;
    export import DatePicker = __MaterialUi.DatePicker.DatePicker;
    export import DatePickerProps = __MaterialUi.DatePicker.DatePickerProps;
    export import Dialog = __MaterialUi.Dialog;
    export import DialogProps = __MaterialUi.DialogProps;
    export import Divider = __MaterialUi.Divider;
    export import DividerProps = __MaterialUi.DividerProps;
    export import Drawer = __MaterialUi.Drawer;
    export import DrawerProps = __MaterialUi.DrawerProps;
    export import DropDownMenu = __MaterialUi.Menus.DropDownMenu;
    export import DropDownMenuProps = __MaterialUi.Menus.DropDownMenuProps;
    export import FlatButton = __MaterialUi.FlatButton;
    export import FlatButtonProps = __MaterialUi.FlatButtonProps;
    export import FloatingActionButton = __MaterialUi.FloatingActionButton;
    export import FloatingActionButtonProps = __MaterialUi.FloatingActionButtonProps;
    export import FontIcon = __MaterialUi.FontIcon;
    export import FontIconProps = __MaterialUi.FontIconProps;
    export import GridList = __MaterialUi.GridList.GridList;
    export import GridListProps = __MaterialUi.GridList.GridListProps;
    export import GridTile = __MaterialUi.GridList.GridTile;
    export import GridTileProps = __MaterialUi.GridList.GridTileProps;
    export import IconButton = __MaterialUi.IconButton;
    export import IconButtonProps = __MaterialUi.IconButtonProps;
    export import IconMenu = __MaterialUi.Menus.IconMenu;
    export import IconMenuProps = __MaterialUi.Menus.IconMenuProps;
    export import LinearProgress = __MaterialUi.LinearProgress;
    export import LinearProgressProps = __MaterialUi.LinearProgressProps;
    export import List = __MaterialUi.List.List;
    export import ListProps = __MaterialUi.List.ListProps;
    export import ListItem = __MaterialUi.List.ListItem;
    export import ListItemProps = __MaterialUi.List.ListItemProps;
    export import makeSelectable = __MaterialUi.List.makeSelectable;
    export import Menu = __MaterialUi.Menus.Menu;
    export import MenuProps = __MaterialUi.Menus.MenuProps;
    export import MenuItem = __MaterialUi.Menus.MenuItem;
    export import MenuItemProps = __MaterialUi.Menus.MenuItemProps;
    export import Paper = __MaterialUi.Paper;
    export import PaperProps = __MaterialUi.PaperProps;
    export import Popover = __MaterialUi.Popover.Popover;
    export import PopoverProps = __MaterialUi.Popover.PopoverProps;
    export import RadioButton = __MaterialUi.Switches.RadioButton;
    export import RadioButtonProps = __MaterialUi.Switches.RadioButtonProps;
    export import RadioButtonGroup = __MaterialUi.Switches.RadioButtonGroup;
    export import RadioButtonGroupProps = __MaterialUi.Switches.RadioButtonGroupProps;
    export import RaisedButton = __MaterialUi.RaisedButton;
    export import RaisedButtonProps = __MaterialUi.RaisedButtonProps;
    export import RefreshIndicator = __MaterialUi.RefreshIndicator;
    export import RefreshIndicatorProps = __MaterialUi.RefreshIndicatorProps;
    export import SelectField = __MaterialUi.SelectField;
    export import SelectFieldProps = __MaterialUi.SelectFieldProps;
    export import Slider = __MaterialUi.Slider;
    export import SliderProps = __MaterialUi.SliderProps;
    export import Subheader = __MaterialUi.Subheader;
    export import SubheaderProps = __MaterialUi.SubheaderProps;
    export import SvgIcon = __MaterialUi.SvgIcon;
    export import SvgIconProps = __MaterialUi.SvgIconProps;
    export import Step = __MaterialUi.Stepper.Step;
    export import StepProps = __MaterialUi.Stepper.StepProps;
    export import StepButton = __MaterialUi.Stepper.StepButton;
    export import StepButtonProps = __MaterialUi.Stepper.StepButtonProps;
    export import StepContent = __MaterialUi.Stepper.StepContent;
    export import StepContentProps = __MaterialUi.Stepper.StepContentProps;
    export import StepLabel = __MaterialUi.Stepper.StepLabel;
    export import StepLabelProps = __MaterialUi.Stepper.StepLabelProps;
    export import Stepper = __MaterialUi.Stepper.Stepper;
    export import StepperProps = __MaterialUi.Stepper.StepperProps;
    export import Snackbar = __MaterialUi.Snackbar;
    export import SnackbarProps = __MaterialUi.SnackbarProps;
    export import Tab = __MaterialUi.Tabs.Tab;
    export import TabProps = __MaterialUi.Tabs.TabProps;
    export import Tabs = __MaterialUi.Tabs.Tabs;
    export import TabsProps = __MaterialUi.Tabs.TabsProps;
    export import Table = __MaterialUi.Table.Table;
    export import TableProps = __MaterialUi.Table.TableProps;
    export import TableBody = __MaterialUi.Table.TableBody;
    export import TableBodyProps = __MaterialUi.Table.TableBodyProps;
    export import TableFooter = __MaterialUi.Table.TableFooter;
    export import TableFooterProps = __MaterialUi.Table.TableFooterProps;
    export import TableHeader = __MaterialUi.Table.TableHeader;
    export import TableHeaderProps = __MaterialUi.Table.TableHeaderProps;
    export import TableHeaderColumn = __MaterialUi.Table.TableHeaderColumn;
    export import TableHeaderColumnProps = __MaterialUi.Table.TableHeaderColumnProps;
    export import TableRow = __MaterialUi.Table.TableRow;
    export import TableRowProps = __MaterialUi.Table.TableRowProps;
    export import TableRowColumn = __MaterialUi.Table.TableRowColumn;
    export import TableRowColumnProps = __MaterialUi.Table.TableRowColumnProps;
    export import TextField = __MaterialUi.TextField;
    export import TextFieldProps = __MaterialUi.TextFieldProps;
    export import TimePicker = __MaterialUi.TimePicker;
    export import TimePickerProps = __MaterialUi.TimePickerProps;
    export import Toggle = __MaterialUi.Switches.Toggle;
    export import ToggleProps = __MaterialUi.Switches.ToggleProps;
    export import Toolbar = __MaterialUi.Toolbar.Toolbar;
    export import ToolbarProps = __MaterialUi.Toolbar.ToolbarProps;
    export import ToolbarGroup = __MaterialUi.Toolbar.ToolbarGroup;
    export import ToolbarGroupProps = __MaterialUi.Toolbar.ToolbarGroupProps;
    export import ToolbarSeparator = __MaterialUi.Toolbar.ToolbarSeparator;
    export import ToolbarSeparatorProps = __MaterialUi.Toolbar.ToolbarSeparatorProps;
    export import ToolbarTitle = __MaterialUi.Toolbar.ToolbarTitle;
    export import ToolbarTitleProps = __MaterialUi.Toolbar.ToolbarTitleProps;
    export import MuiThemeProvider = __MaterialUi.Styles.MuiThemeProvider;
    export import Styles = __MaterialUi.Styles;
}

declare namespace __MaterialUi {
    // ReactLink is from "react/addons"
    interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    export interface ThemeWrapperProps {
        theme: Styles.MuiTheme;
    }

    export class ThemeWrapper extends React.Component<ThemeWrapperProps> {
    }

    export namespace Styles {
        interface Spacing {
            iconSize?: number;

            desktopGutter?: number;
            desktopGutterMore?: number;
            desktopGutterLess?: number;
            desktopGutterMini?: number;
            desktopKeylineIncrement?: number;
            desktopDropDownMenuItemHeight?: number;
            desktopDropDownMenuFontSize?: number;
            desktopLeftNavMenuItemHeight?: number;
            desktopSubheaderHeight?: number;
            desktopToolbarHeight?: number;
        }
        export let Spacing: Spacing;

        interface ThemePalette {
            primary1Color?: string;
            primary2Color?: string;
            primary3Color?: string;
            accent1Color?: string;
            accent2Color?: string;
            accent3Color?: string;
            textColor?: string;
            secondaryTextColor?: string;
            alternateTextColor?: string;
            canvasColor?: string;
            borderColor?: string;
            disabledColor?: string;
            pickerHeaderColor?: string;
            clockCircleColor?: string;
            shadowColor?: string;
        }
        export let ThemePalette: ThemePalette;
        interface MuiTheme {
            spacing?: Spacing;
            fontFamily?: string;
            palette?: ThemePalette;
            isRtl?: boolean;
            userAgent?: string | boolean;
            zIndex?: zIndex;
            baseTheme?: RawTheme;
            rawTheme?: RawTheme;
            appBar?: {
                color?: string;
                textColor?: string;
                height?: number;
                titleFontWeight?: number;
                padding?: number;
            };
            avatar?: {
                color?: string;
                backgroundColor?: string;
                borderColor?: string;
            };
            badge?: {
                color?: string;
                textColor?: string;
                primaryColor?: string;
                primaryTextColor?: string;
                secondaryColor?: string;
                secondaryTextColor?: string;
                fontWeight?: number;
            };
            button?: {
                height?: number;
                minWidth?: number;
                iconButtonSize?: number;
                textTransform?: string;
            };
            card?: {
                titleColor?: string;
                subtitleColor?: string;
                fontWeight?: number;
            };
            cardMedia?: {
                color?: string;
                overlayContentBackground?: string;
                titleColor?: string;
                subtitleColor?: string;
            };
            cardText?: {
                textColor?: string;
            };
            checkbox?: {
                boxColor?: string;
                checkedColor?: string;
                requiredColor?: string;
                disabledColor?: string;
                labelColor?: string;
                labelDisabledColor?: string;
            };
            chip?: {
                backgroundColor?: string;
                deleteIconColor?: string;
                textColor?: string;
                fontSize?: number;
                fontWeight?: number;
                shadow?: string;
            };
            datePicker?: {
                color?: string;
                textColor?: string;
                calendarTextColor?: string;
                selectColor?: string;
                selectTextColor?: string;
                calendarYearBackgroundColor?: string;
                headerColor?: string;
            };
            dialog?: {
                titleFontSize?: number;
                bodyFontSize?: number;
                bodyColor?: string;
            };
            dropDownMenu?: {
                accentColor?: string;
            };
            enhancedButton?: {
                tapHighlightColor?: string;
            };
            flatButton?: {
                color?: string;
                buttonFilterColor?: string;
                disabledTextColor?: string;
                textColor?: string;
                primaryTextColor?: string;
                secondaryTextColor?: string;
                fontSize?: number;
                fontWeight?: number;
            };
            floatingActionButton?: {
                buttonSize?: number;
                miniSize?: number;
                color?: string;
                iconColor?: string;
                secondaryColor?: string;
                secondaryIconColor?: string;
                disabledTextColor?: string;
                disabledColor?: string;
            };
            gridTile?: {
                textColor?: string;
            };
            icon?: {
                color?: string;
                backgroundColor?: string;
            };
            inkBar?: {
                backgroundColor?: string;
            };
            drawer?: {
                width?: number;
                color?: string;
            };
            listItem?: {
                nestedLevelDepth?: number;
                secondaryTextColor?: string;
                leftIconColor?: string;
                rightIconColor?: string;
            };
            menu?: {
                backgroundColor?: string;
                containerBackgroundColor?: string;
            };
            menuItem?: {
                dataHeight?: number;
                height?: number;
                hoverColor?: string;
                padding?: number;
                selectedTextColor?: string;
                rightIconDesktopFill?: string;
            };
            menuSubheader?: {
                padding?: number;
                borderColor?: string;
                textColor?: string;
            };
            overlay?: {
                backgroundColor?: string;
            };
            paper?: {
                color?: string;
                backgroundColor?: string;
                zDepthShadows?: string[];
            };
            radioButton?: {
                borderColor?: string;
                backgroundColor?: string;
                checkedColor?: string;
                requiredColor?: string;
                disabledColor?: string;
                size?: number;
                labelColor?: string;
                labelDisabledColor?: string;
            };
            raisedButton?: {
                color?: string;
                textColor?: string;
                primaryColor?: string;
                primaryTextColor?: string;
                secondaryColor?: string;
                secondaryTextColor?: string;
                disabledColor?: string;
                disabledTextColor?: string;
                fontSize?: number;
                fontWeight?: number;
            };
            refreshIndicator?: {
                strokeColor?: string;
                loadingStrokeColor?: string;
            };
            ripple?: {
                color?: string;
            };
            slider?: {
                trackSize?: number;
                trackColor?: string;
                trackColorSelected?: string;
                handleSize?: number;
                handleSizeDisabled?: number;
                handleSizeActive?: number;
                handleColorZero?: string;
                handleFillColor?: string;
                selectionColor?: string;
                rippleColor?: string;
            };
            snackbar?: {
                textColor?: string;
                backgroundColor?: string;
                actionColor?: string;
            };
            subheader?: {
                color?: string;
                fontWeight?: number;
            };
            stepper?: {
                backgroundColor?: string;
                hoverBackgroundColor?: string;
                iconColor?: string;
                hoveredIconColor?: string;
                inactiveIconColor?: string;
                textColor?: string;
                disabledTextColor?: string;
                connectorLineColor?: string;
            };
            svgIcon?: {
                color?: string,
            };
            table?: {
                backgroundColor?: string;
            };
            tableFooter?: {
                borderColor?: string;
                textColor?: string;
            };
            tableHeader?: {
                borderColor?: string;
            };
            tableHeaderColumn?: {
                textColor?: string;
                height?: number;
                spacing?: number;
            };
            tableRow?: {
                hoverColor?: string;
                stripeColor?: string;
                selectedColor?: string;
                textColor?: string;
                borderColor?: string;
                height?: number;
            };
            tableRowColumn?: {
                height?: number;
                spacing?: number;
            };
            tabs?: {
                backgroundColor?: string;
                textColor?: string;
                selectedTextColor?: string;
            };
            textField?: {
                textColor?: string;
                hintColor?: string;
                floatingLabelColor?: string;
                disabledTextColor?: string;
                errorColor?: string;
                focusColor?: string;
                backgroundColor?: string;
                borderColor?: string;
            };
            timePicker?: {
                color?: string;
                textColor?: string;
                accentColor?: string;
                clockColor?: string;
                clockCircleColor?: string;
                headerColor?: string;
                selectColor?: string;
                selectTextColor?: string;
            };
            toggle?: {
                thumbOnColor?: string;
                thumbOffColor?: string;
                thumbDisabledColor?: string;
                thumbRequiredColor?: string;
                trackOnColor?: string;
                trackOffColor?: string;
                trackDisabledColor?: string;
                labelColor?: string;
                labelDisabledColor?: string;
                trackRequiredColor?: string;
            };
            toolbar?: {
                color?: string;
                hoverColor?: string;
                backgroundColor?: string;
                height?: number;
                titleFontSize?: number;
                iconColor?: string;
                separatorColor?: string;
                menuHoverColor?: string;
            };
            tooltip?: {
                color?: string;
                rippleBackgroundColor?: string;
            };
        }

        interface zIndex {
            menu: number;
            appBar: number;
            drawerOverlay: number;
            drawer: number;
            dialogOverlay: number;
            dialog: number;
            layer: number;
            popover: number;
            snackbar: number;
            tooltip: number;
        }
        export let zIndex: zIndex;

        interface RawTheme {
            spacing?: Spacing;
            fontFamily?: string;
            palette?: ThemePalette;
        }
        let lightBaseTheme: RawTheme;
        let darkBaseTheme: RawTheme;

        export function muiThemeable(): <
            TComponent extends React.ComponentClass<P> | React.StatelessComponent<P>,
            P extends {muiTheme?: MuiTheme}
        >(component: TComponent) => TComponent;

        export interface MuiThemeProviderProps {
            muiTheme?: MuiTheme;
        }
        export class MuiThemeProvider extends React.Component<MuiThemeProviderProps> {
        }

        export function getMuiTheme(...muiTheme: MuiTheme[]): MuiTheme;

        interface Transitions {
            easeOut(duration?: string, property?: string | string[], delay?: string, easeFunction?: string): string;
            create(duration?: string, property?: string, delay?: string, easeFunction?: string): string;
            easeOutFunction: string;
            easeInOutFunction: string;
        }
        export let Transitions: Transitions;

        interface Typography {
            textFullBlack: string;
            textDarkBlack: string;
            textLightBlack: string;
            textMinBlack: string;
            textFullWhite: string;
            textDarkWhite: string;
            textLightWhite: string;

            // font weight
            fontWeightLight: number;
            fontWeightNormal: number;
            fontWeightMedium: number;

            fontStyleButtonFontSize: number;
        }
        export let Typography: Typography;
    }

    export interface AppBarProps {
        className?: string;
        iconClassNameLeft?: string;
        iconClassNameRight?: string;
        iconElementLeft?: React.ReactElement<any>;
        iconElementRight?: React.ReactElement<any>;
        iconStyleRight?: React.CSSProperties;
        iconStyleLeft?: React.CSSProperties;
        onLeftIconButtonClick?: React.MouseEventHandler<{}>;
        onRightIconButtonClick?: React.MouseEventHandler<{}>;
        onTitleClick?: React.MouseEventHandler<{}>;
        showMenuIconButton?: boolean;
        style?: React.CSSProperties;
        title?: React.ReactNode;
        titleStyle?: React.CSSProperties;
        zDepth?: number;
    }
    export class AppBar extends React.Component<AppBarProps> {
    }

    export interface AppCanvasProps {
    }
    export class AppCanvas extends React.Component<AppCanvasProps> {
    }

    namespace propTypes {
        type horizontal = 'left' | 'middle' | 'right';
        type tooltipHorizontal = 'left' | 'center' | 'right';
        type vertical = 'top' | 'center' | 'bottom';
        type direction = 'left' | 'right' | 'up' | 'down';

        interface origin {
            horizontal: horizontal;
            vertical: vertical;
        }

        interface utils {
            getWeekArray(date: Date, firstDayOfWeek: number): Array<Array<(Date | null)>>;
            getYear(date: Date): number;
            setYear(date: Date, year: number): Date;
            addDays(date: Date, days: number): Date;
            addMonths(date: Date, months: number): Date;
            addYears(date: Date, years: number): Date;
            getFirstDayOfMonth(date: Date): Date;
            monthDiff(date1: Date, date2: Date): number;
        }

        type corners = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
        type cornersAndCenter = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
    }

    export interface AutoCompleteProps<DataItem> extends TextFieldProps {
        anchorOrigin?: propTypes.origin;
        animated?: boolean;
        animation?: React.ComponentClass<Popover.PopoverAnimationProps>;
        dataSource: DataItem[];
        dataSourceConfig?: { text: string; value: string; };
        disableFocusRipple?: boolean;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        filter?(searchText: string, key: string, item: DataItem): boolean;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintText?: React.ReactNode;
        listStyle?: React.CSSProperties;
        maxSearchResults?: number;
        menuCloseDelay?: number;
        menuProps?: any;
        menuStyle?: React.CSSProperties;
        onBlur?: React.FocusEventHandler<{}>;
        onFocus?: React.FocusEventHandler<{}>;
        onKeyDown?: React.KeyboardEventHandler<{}>;
        onNewRequest?(chosenRequest: DataItem, index: number): void;
        onUpdateInput?(searchText: string, dataSource: DataItem[]): void;
        open?: boolean;
        openOnFocus?: boolean;
        popoverProps?: Popover.PopoverProps;
        searchText?: string;
        style?: React.CSSProperties;
        targetOrigin?: propTypes.origin;
        textFieldStyle?: React.CSSProperties;
    }
    export class AutoComplete extends React.Component<AutoCompleteProps<any>> {
        static noFilter(): boolean;
        static defaultFilter(searchText: string, key: string): boolean;
        static caseSensitiveFilter(searchText: string, key: string): boolean;
        static caseInsensitiveFilter(searchText: string, key: string): boolean;

        static levenshteinDistanceFilter(distanceLessThan: number): (searchText: string, key: string) => boolean;

        static fuzzyFilter(searchText: string, key: string): boolean;
        static Item: Menus.MenuItem;
        static Divider: Divider;
    }

    export interface AvatarProps {
        backgroundColor?: string;
        className?: string;
        color?: string;
        icon?: React.ReactElement<any>
        size?: number;
        src?: string;
        style?: React.CSSProperties;
        onClick?: React.MouseEventHandler<{}>;
    }
    export class Avatar extends React.Component<AvatarProps> {
    }

    export interface BadgeProps {
        badgeContent: React.ReactNode;
        badgeStyle?: React.CSSProperties;
        className?: string;
        primary?: boolean;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class Badge extends React.Component<BadgeProps> {
    }

    export interface BeforeAfterWrapperProps {
        afterElementType?: string;
        afterStyle?: React.CSSProperties;
        beforeElementType?: string;
        beforeStyle?: React.CSSProperties;
        elementType?: string;
        style?: React.CSSProperties;
    }
    export class BeforeAfterWrapper extends React.Component<BeforeAfterWrapperProps> {
    }

    // non generally overridden elements of EnhancedButton
    export interface SharedEnhancedButtonProps<T> {
        centerRipple?: boolean;
        disableFocusRipple?: boolean;
        disableKeyboardFocus?: boolean;
        disableTouchRipple?: boolean;
        focusRippleColor?: string;
        focusRippleOpacity?: number;
        href?: string;
        keyboardFocused?: boolean;
        onBlur?: React.FocusEventHandler<{}>;
        onFocus?: React.FocusEventHandler<{}>;
        onKeyboardFocus?(e: React.FocusEvent<{}>, isKeyboardFocused: boolean): void;
        onKeyDown?: React.KeyboardEventHandler<{}>;
        onKeyUp?: React.KeyboardEventHandler<{}>;
        onClick?: React.MouseEventHandler<{}>;
        style?: React.CSSProperties;
        tabIndex?: number;
        target?: string;
        touchRippleColor?: string;
        touchRippleOpacity?: number;
        type?: string;
        containerElement?: React.ReactNode | string;
    }

    export interface EnhancedButtonProps extends React.HTMLAttributes<{}>, SharedEnhancedButtonProps<EnhancedButton> {
        // container element, <button/>, or <span/>(if disabled link) is the element that get the 'other' properties
        containerElement?: React.ReactNode | string;
        disabled?: boolean;
    }
    export class EnhancedButton extends React.Component<EnhancedButtonProps> {
    }

    export interface FlatButtonProps extends React.DOMAttributes<{}>, SharedEnhancedButtonProps<FlatButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        className?: string;
        disabled?: boolean;
        fullWidth?: boolean;
        hoverColor?: string;
        icon?: React.ReactNode;
        label?: React.ReactNode;
        labelPosition?: "before" | "after";
        labelStyle?: React.CSSProperties;
        linkButton?: boolean;
        onKeyboardFocus?(e: React.FocusEvent<{}>, isKeyboardFocused: boolean): void;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        onTouchStart?: React.TouchEventHandler<{}>;
        primary?: boolean;
        rippleColor?: string;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class FlatButton extends React.Component<FlatButtonProps> {
    }

    export interface RaisedButtonProps extends SharedEnhancedButtonProps<RaisedButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        buttonStyle?: React.CSSProperties;
        className?: string;
        disabled?: boolean;
        disabledBackgroundColor?: string;
        disabledLabelColor?: string;
        fullWidth?: boolean;
        icon?: React.ReactNode;
        label?: React.ReactNode;
        labelColor?: string;
        labelPosition?: "before" | "after";
        labelStyle?: React.CSSProperties;
        linkButton?: boolean;
        onMouseDown?: React.MouseEventHandler<{}>;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        onMouseUp?: React.MouseEventHandler<{}>;
        onTouchEnd?: React.TouchEventHandler<{}>;
        onTouchStart?: React.TouchEventHandler<{}>;
        overlayStyle?: React.CSSProperties;
        primary?: boolean;
        rippleStyle?: React.CSSProperties;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class RaisedButton extends React.Component<RaisedButtonProps> {
    }

    export interface FloatingActionButtonProps extends React.HTMLAttributes<{}>, SharedEnhancedButtonProps<FloatingActionButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        className?: string;
        disabled?: boolean;
        disabledColor?: string;
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        mini?: boolean;
        onMouseDown?: React.MouseEventHandler<{}>;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        onMouseUp?: React.MouseEventHandler<{}>;
        onTouchEnd?: React.TouchEventHandler<{}>;
        onTouchStart?: React.TouchEventHandler<{}>;
        secondary?: boolean;
        style?: React.CSSProperties;
        zDepth?: number;
    }
    export class FloatingActionButton extends React.Component<FloatingActionButtonProps> {
    }

    export interface IconButtonProps extends React.HTMLAttributes<{}>, SharedEnhancedButtonProps<IconButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        className?: string;
        disableTouchRipple?: boolean;
        disabled?: boolean;
        hoveredStyle?: React.CSSProperties;
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        onBlur?: React.FocusEventHandler<{}>;
        onFocus?: React.FocusEventHandler<{}>;
        onKeyboardFocus?(e: React.FocusEvent<{}>, isKeyboardFocused: boolean): void;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        onMouseOut?: React.MouseEventHandler<{}>;
        style?: React.CSSProperties;
        tooltip?: React.ReactNode | string;
        tooltipPosition?: propTypes.cornersAndCenter;
        tooltipStyles?: React.CSSProperties;
        touch?: boolean;
    }
    export class IconButton extends React.Component<IconButtonProps> {
    }

    namespace BottomNavigation {
        export interface BottomNavigationProps {
            className?: string;
            selectedIndex?: number;
            style?: React.CSSProperties;
        }

        export class BottomNavigation extends React.Component<BottomNavigationProps> { }

        export interface BottomNavigationItemProps extends SharedEnhancedButtonProps<BottomNavigationItem> {
            className?: string;
            icon?: React.ReactNode;
            label?: React.ReactNode;
        }

        export class BottomNavigationItem extends React.Component<BottomNavigationItemProps> { }
    }

    namespace Card {
        export interface CardProps {
            className?: string;
            actAsExpander?: boolean;
            containerStyle?: React.CSSProperties;
            expandable?: boolean;
            expanded?: boolean;
            initiallyExpanded?: boolean;
            onExpandChange?(isExpanded: boolean): void;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
        }
        export class Card extends React.Component<CardProps> {
        }

        export interface CardActionsProps {
            actAsExpander?: boolean;
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
            className?: string;
        }
        export class CardActions extends React.Component<CardActionsProps> {
        }

        export interface CardExpandableProps {
            expanded?: boolean;
            onExpanding?(isExpanded: boolean): void;
            style?: React.CSSProperties;
        }
        export class CardExpandable extends React.Component<CardExpandableProps> {
        }

        export interface CardHeaderProps {
            actAsExpander?: boolean;
            avatar?: React.ReactNode;
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
            subtitle?: React.ReactNode;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            textStyle?: React.CSSProperties;
            title?: React.ReactNode;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
            className?: string;
            openIcon?: React.ReactNode;
            closeIcon?: React.ReactNode;
            iconStyle?: React.CSSProperties;
        }
        export class CardHeader extends React.Component<CardHeaderProps> {
        }

        export interface CardMediaProps {
            actAsExpander?: boolean;
            expandable?: boolean;
            mediaStyle?: React.CSSProperties;
            overlay?: React.ReactNode;
            overlayContainerStyle?: React.CSSProperties;
            overlayContentStyle?: React.CSSProperties;
            overlayStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class CardMedia extends React.Component<CardMediaProps> {
        }

        export interface CardTextProps {
            actAsExpander?: boolean;
            color?: string;
            expandable?: boolean;
            style?: React.CSSProperties;
            className?: string;
        }
        export class CardText extends React.Component<CardTextProps> {
        }

        export interface CardTitleProps {
            actAsExpander?: boolean;
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
            subtitle?: React.ReactNode;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            title?: React.ReactNode;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
        }
        export class CardTitle extends React.Component<CardTitleProps> {
        }
    }

    export interface ChipProps {
        backgroundColor?: string;
        className?: string;
        containerElement?: React.ReactNode | string;
        labelColor?: string;
        labelStyle?: React.CSSProperties;
        onClick?: React.MouseEventHandler<Chip>;
        onRequestDelete?: React.TouchEventHandler<Chip>;
        style?: React.CSSProperties;
        deleteIconStyle?: React.CSSProperties;
    }

    export class Chip extends React.Component<ChipProps> {
    }

    namespace DatePicker {
        export interface DatePickerProps {
            // <TextField/> is the element that get the 'other' properties
            DateTimeFormat?: typeof Intl.DateTimeFormat;
            autoOk?: boolean;
            cancelLabel?: React.ReactNode;
            container?: "dialog" | "inline";
            defaultDate?: Date;
            dialogContainerStyle?: React.CSSProperties;
            disableYearSelection?: boolean;
            disabled?: boolean;
            firstDayOfWeek?: number;
            formatDate?(date: Date): string;
            locale?: string;
            maxDate?: Date;
            minDate?: Date;
            mode?: "portrait" | "landscape";
            okLabel?: React.ReactNode;
            onChange?(e: any, date: Date): void; // e is always null
            onDismiss?(): void;
            onFocus?: React.FocusEventHandler<{}>;
            onShow?(): void;
            onClick?: React.TouchEventHandler<{}>;
            shouldDisableDate?(day: Date): boolean;
            style?: React.CSSProperties;
            textFieldStyle?: React.CSSProperties;
            value?: Date;

            // From <TextField />
            className?: string;
            defaultValue?: string;
            errorStyle?: React.CSSProperties;
            errorText?: React.ReactNode;
            floatingLabelStyle?: React.CSSProperties;
            floatingLabelText?: React.ReactNode;
            fullWidth?: boolean;
            hideCalendarDate?: boolean;
            hintStyle?: React.CSSProperties;
            hintText?: React.ReactNode;
            id?: string;
            inputStyle?: React.CSSProperties;
            onBlur?: React.FocusEventHandler<{}>;
            onKeyDown?: React.KeyboardEventHandler<{}>;
            rows?: number;
            rowsMax?: number;
            name?: string;
            type?: string;
            underlineDisabledStyle?: React.CSSProperties;
            underlineFocusStyle?: React.CSSProperties;
            underlineShow?: boolean;
            underlineStyle?: React.CSSProperties;
            utils?: propTypes.utils;
        }
        export class DatePicker extends React.Component<DatePickerProps> {
            focus(): void;
            openDialog(): void;
        }

        export interface DatePickerDialogProps {
            // <Container/> is the element that get the 'other' properties
            DateTimeFormat?: typeof Intl.DateTimeFormat;
            animation?: React.ComponentClass<Popover.PopoverAnimationProps>;
            autoOk?: boolean;
            cancelLabel?: React.ReactNode;
            container?: "dialog" | "inline";
            disableYearSelection?: boolean;
            firstDayOfWeek?: number;
            initialDate?: Date;
            locale?: string;
            maxDate?: Date;
            minDate?: Date;
            mode?: "portrait" | "landscape";
            okLabel?: React.ReactNode;
            onAccept?(d: Date): void;
            onDismiss?(): void;
            onShow?(): void;
            shouldDisableDate?(day: Date): boolean;
            style?: React.CSSProperties;
            utils?: propTypes.utils;
        }
        export class DatePickerDialog extends React.Component<DatePickerDialogProps> {
            show(): void;
            dismiss(): void;
        }
    }

    /** @deprecated use array of components instead */
    export interface DialogAction {
        id?: string;
        onClick?: React.MouseEventHandler<{}>;
        ref?: string;
        text: string;
    }
    export interface DialogProps extends React.DOMAttributes<{}>, React.Props<Dialog> {
        actions?: Array<DialogAction | React.ReactElement<any>>;
        /** @deprecated use a custom `actions` property instead */
        actionFocus?: string;
        actionsContainerClassName?: string;
        actionsContainerStyle?: React.CSSProperties;
        autoDetectWindowHeight?: boolean;
        autoScrollBodyContent?: boolean;
        bodyClassName?: string;
        bodyStyle?: React.CSSProperties;
        className?: string;
        contentClassName?: string;
        contentStyle?: React.CSSProperties;
        modal?: boolean;
        onRequestClose?(buttonClicked: boolean): void;
        open: boolean;
        overlayClassName?: string;
        overlayStyle?: React.CSSProperties;
        paperClassName?: string;
        paperProps?: any;
        repositionOnUpdate?: boolean;
        style?: React.CSSProperties;
        title?: React.ReactNode;
        titleClassName?: string;
        titleStyle?: React.CSSProperties;
    }
    export class Dialog extends React.Component<DialogProps> {
    }

    export interface DividerProps {
        className?: string;
        inset?: boolean;
        style?: React.CSSProperties;
    }
    export class Divider extends React.Component<DividerProps> {
    }

    export interface DrawerProps {
        className?: string;
        containerClassName?: string;
        containerStyle?: React.CSSProperties;
        disableSwipeToOpen?: boolean;
        docked?: boolean;
        onRequestChange?(opening: boolean, reason: string): void;
        open?: boolean;
        openSecondary?: boolean;
        overlayClassName?: string;
        overlayStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        swipeAreaWidth?: number;
        width?: number | string;
        zDepth?: number;
    }
    export class Drawer extends React.Component<DrawerProps> {
    }

    namespace GridList {
        export interface GridListProps {
            cellHeight?: number|'auto';
            cols?: number;
            padding?: number;
            style?: React.CSSProperties;
        }
        export class GridList extends React.Component<GridListProps> {
        }

        export interface GridTileProps {
            actionIcon?: React.ReactElement<any>;
            actionPosition?: "left" | "right";
            cols?: number;
            containerElement?: string | React.ReactElement<any> | React.ComponentClass<any>;
            rows?: number;
            style?: React.CSSProperties;
            subtitle?: React.ReactNode;
            subtitleStyle?: React.CSSProperties;
            title?: React.ReactNode;
            titleBackground?: string;
            titlePosition?: "top" | "bottom";
            titleStyle?: React.CSSProperties;
            onClick?: React.MouseEventHandler<{}>;
        }
        export class GridTile extends React.Component<GridTileProps> {
        }
    }

    export interface FontIconProps extends React.HTMLAttributes<{}>, React.Props<FontIcon> {
        // <span/> is the element that get the 'other' properties
        color?: string;
        hoverColor?: string;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        style?: React.CSSProperties;
    }
    export class FontIcon extends React.Component<FontIconProps> {
    }

    export interface SvgIconProps extends React.SVGAttributes<{}>, React.Props<SvgIcon> {
        // <svg/> is the element that get the 'other' properties
        color?: string;
        hoverColor?: string;
        onMouseEnter?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        style?: React.CSSProperties;
        viewBox?: string;
    }
    export class SvgIcon extends React.Component<SvgIconProps> {
    }

    namespace List {
        export interface ListProps extends React.HTMLAttributes<{}> {}
        export class List extends React.Component<ListProps> {}

        export interface ListItemProps extends EnhancedButtonProps {
            // <EnhancedButton/> is the element that get the 'other' properties
            autoGenerateNestedIndicator?: boolean;
            disableKeyboardFocus?: boolean;
            disabled?: boolean;
            hoverColor?: string;
            initiallyOpen?: boolean;
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            leftAvatar?: React.ReactElement<any>;
            leftCheckbox?: React.ReactElement<any>;
            leftIcon?: React.ReactElement<any>;
            nestedItems?: Array<React.ReactElement<ListItemProps>>;
            nestedLevel?: number;
            nestedListStyle?: React.CSSProperties;
            onKeyboardFocus?(e: React.FocusEvent<{}>, isKeyboardFocused: boolean): void;
            onMouseEnter?: React.MouseEventHandler<{}>;
            onMouseLeave?: React.MouseEventHandler<{}>;
            onNestedListToggle?(item: ListItem): void;
            onTouchStart?: React.TouchEventHandler<{}>;
            onClick?: React.MouseEventHandler<{}>;
            open?: boolean;
            primaryText?: React.ReactNode;
            primaryTogglesNestedList?: boolean;
            rightAvatar?: React.ReactElement<any>;
            rightIcon?: React.ReactElement<any>;
            rightIconButton?: React.ReactElement<any>;
            rightToggle?: React.ReactElement<any>;
            secondaryText?: React.ReactNode;
            secondaryTextLines?: number; // 1 or 2
            style?: React.CSSProperties;
            value?: any;
        }
        export class ListItem extends React.Component<ListItemProps> {
        }

        export interface SelectableProps {
            onChange?(e: React.SyntheticEvent<{}>, value: any): void;
            selectedItemStyle?: React.CSSProperties;
            value?: any;
        }

        // union types for higher order components in TypeScript 1.8: https://github.com/Microsoft/TypeScript/issues/4362
        export function makeSelectable<P extends {}>(component: React.ComponentClass<P>): React.ComponentClass<P & SelectableProps>;
    }

    namespace Menus {
        export interface MenuProps {
            // <List/> is the element that get the 'other' properties
            autoWidth?: boolean;
            desktop?: boolean;
            disableAutoFocus?: boolean;
            initiallyKeyboardFocused?: boolean;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            multiple?: boolean;
            onChange?(e: React.SyntheticEvent<{}>, itemValue: any | any[]): void;
            onEscKeyDown?: React.KeyboardEventHandler<{}>;
            onItemClick?(e: React.SyntheticEvent<{}>, item: MenuItem): void;
            onKeyDown?: React.KeyboardEventHandler<{}>;
            selectedMenuItemStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            value?: any | any[];
            valueLink?: ReactLink<any | any[]>;
            width?: string | number;
        }
        export class Menu extends React.Component<MenuProps> {
        }

        export interface MenuItemProps extends List.ListItemProps {
            // <ListItem/> is the element that get the 'other' properties
            animation?: React.ComponentClass<Popover.PopoverAnimationProps>;
            checked?: boolean;
            desktop?: boolean;
            disabled?: boolean;
            focusState?: string; // 'none', 'focused', or 'keyboard-focused'
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            label?: string | React.ReactNode;
            leftIcon?: React.ReactElement<any>;
            menuItems?: React.ReactNode;
            onClick?: React.MouseEventHandler<{}>;
            primaryText?: React.ReactNode;
            rightIcon?: React.ReactElement<any>;
            secondaryText?: React.ReactNode;
            style?: React.CSSProperties;
            containerElement?: React.ReactNode | string;
        }
        export class MenuItem extends React.Component<MenuItemProps> {
        }

        export interface IconMenuProps {
            // <Menu/> is the element that get the 'other' properties
            anchorOrigin?: propTypes.origin;
            animated?: boolean;
            animation?: React.ComponentClass<Popover.PopoverAnimationProps>;
            className?: string;
            clickCloseDelay?: number;
            iconButtonElement: React.ReactElement<IconButton>;
            iconStyle?: React.CSSProperties;
            menuStyle?: React.CSSProperties;
            onClick?(e: React.SyntheticEvent<{}>): void;
            onItemClick?(e: React.SyntheticEvent<{}>, item: MenuItem): void;
            onKeyboardFocus?(e: React.FocusEvent<{}>, isKeyboardFocused: boolean): void;
            onMouseDown?: React.MouseEventHandler<{}>;
            onMouseEnter?: React.MouseEventHandler<{}>;
            onMouseLeave?: React.MouseEventHandler<{}>;
            onMouseUp?: React.MouseEventHandler<{}>;
            onRequestChange?(opening: boolean, reason: string): void;
            open?: boolean;
            targetOrigin?: propTypes.origin;
            useLayerForClickAway?: boolean;

            // Other properties from <Menu/>
            autoWidth?: boolean;
            desktop?: boolean;
            disableAutoFocus?: boolean;
            initiallyKeyboardFocused?: boolean;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            multiple?: boolean;
            onChange?(e: React.SyntheticEvent<{}>, itemValue: any | any[]): void;
            style?: React.CSSProperties;
            value?: any | any[];
        }
        export class IconMenu extends React.Component<IconMenuProps> {
        }

        export interface DropDownMenuProps {
            // <div/> is the element that gets the 'other' properties
            anchorOrigin?: propTypes.origin;
            animated?: boolean;
            animation?: React.ComponentClass<Popover.PopoverAnimationProps>;
            className?: string;
            disabled?: boolean;
            iconButton?: React.ReactNode;
            iconStyle?: React.CSSProperties;
            labelStyle?: React.CSSProperties;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            menuItemStyle?: React.CSSProperties;
            menuStyle?: React.CSSProperties;
            multiple?: boolean;
            onChange?(e: React.SyntheticEvent<{}>, index: number, menuItemValue: any): void;
            onClose?(e: React.SyntheticEvent<{}>): void;
            openImmediately?: boolean;
            selectedMenuItemStyle?: React.CSSProperties;
            selectionRenderer?(value: any, menuItem: any): void;
            style?: React.CSSProperties;
            targetOrigin?: propTypes.origin;
            underlineStyle?: React.CSSProperties;
            value?: any;
        }
        export class DropDownMenu extends React.Component<DropDownMenuProps> {
        }
    }

    export interface OverlayProps extends React.Props<Overlay> {
        autoLockScrolling?: boolean;
        show?: boolean;
        transitionEnabled?: boolean;
        onClick?: React.MouseEventHandler<{}>;
    }
    export class Overlay extends React.Component<OverlayProps> {
    }

    export interface PaperProps extends React.HTMLAttributes<{}>, React.Props<Paper> {
        circle?: boolean;
        rounded?: boolean;
        style?: React.CSSProperties;
        transitionEnabled?: boolean;
        zDepth?: number;
        width?: number | string;
        height?: number | string;
    }
    export class Paper extends React.Component<PaperProps> {
    }

    namespace Popover {
        export interface PopoverAnimationProps {
            open: boolean;
            style?: React.CSSProperties;
        }

        export interface PopoverProps {
            anchorEl?: React.ReactInstance;
            anchorOrigin?: propTypes.origin;
            animated?: boolean;
            animation?: React.ComponentClass<PopoverAnimationProps>;
            autoCloseWhenOffScreen?: boolean;
            canAutoPosition?: boolean;
            className?: string;
            onRequestClose?(reason: string): void;
            open?: boolean;
            style?: React.CSSProperties;
            targetOrigin?: propTypes.origin;
            useLayerForClickAway?: boolean;
            zDepth?: number;
        }
        export class Popover extends React.Component<PopoverProps> {
        }

        export interface PopoverAnimationVerticalProps extends PopoverAnimationProps {
            className?: string;
            targetOrigin?: propTypes.origin;
            zDepth?: number;
        }
        export class PopoverAnimationVertical extends React.Component<PopoverAnimationVerticalProps> {
        }

        export interface PopoverAnimationDefaultProps extends PopoverAnimationProps {
            className?: string;
            targetOrigin?: propTypes.origin;
            zDepth?: number;
        }
        export class PopoverAnimationDefault extends React.Component<PopoverAnimationDefaultProps> {
        }
    }

    export interface CircularProgressProps {
        color?: string;
        innerStyle?: React.CSSProperties;
        max?: number;
        min?: number;
        mode?: "determinate" | "indeterminate";
        size?: number;
        style?: React.CSSProperties;
        thickness?: number;
        value?: number;
    }
    export class CircularProgress extends React.Component<CircularProgressProps> {
    }

    export interface LinearProgressProps {
        color?: string;
        max?: number;
        min?: number;
        mode?: "determinate" | "indeterminate";
        style?: React.CSSProperties;
        value?: number;
    }
    export class LinearProgress extends React.Component<LinearProgressProps> {
    }

    export interface RefreshIndicatorProps {
        color?: string;
        left: number;
        loadingColor?: string;
        percentage?: number;
        size?: number;
        status?: "ready" | "loading" | "hide";
        style?: React.CSSProperties;
        top: number;
    }
    export class RefreshIndicator extends React.Component<RefreshIndicatorProps> {
    }

    export interface SelectFieldProps {
        // <DropDownMenu/> is the element that get the 'other' properties
        autoWidth?: boolean;
        disabled?: boolean;
        dropDownMenuProps?: Menus.DropDownMenuProps;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        floatingLabelFixed?: boolean;
        floatingLabelStyle?: React.CSSProperties;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintStyle?: React.CSSProperties;
        hintText?: React.ReactNode;
        iconStyle?: React.CSSProperties;
        id?: string;
        name?: string;
        labelStyle?: React.CSSProperties;
        multiple?: boolean;
        onBlur?: React.FocusEventHandler<{}>;
        onChange?(e: React.SyntheticEvent<{}>, index: number, menuItemValue: any): void;
        onFocus?: React.FocusEventHandler<{}>;
        selectFieldRoot?: React.CSSProperties;
        selectionRenderer?(value: any): React.ReactNode;
        style?: React.CSSProperties;
        underlineDisabledStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineStyle?: React.CSSProperties;
        value?: any;

        // useful attributes passed to <DropDownMenu/>
        className?: string;
        maxHeight?: number;
        menuStyle?: any;
        listStyle?: React.CSSProperties;
        menuItemStyle?: React.CSSProperties;
        selectedMenuItemStyle?: React.CSSProperties;
        openImmediately?: boolean;
    }
    export class SelectField extends React.Component<SelectFieldProps> {
    }

    export interface SliderProps {
        axis?: 'x' | 'x-reverse' | 'y' | 'y-reverse';
        defaultValue?: number;
        description?: string;
        disableFocusRipple?: boolean;
        disabled?: boolean;
        error?: string;
        max?: number;
        min?: number;
        name?: string;
        onBlur?: React.FocusEventHandler<{}>;
        onChange?(e: React.MouseEvent<{}>, value: number): void;
        onDragStart?: React.MouseEventHandler<{}>;
        onDragStop?: React.MouseEventHandler<{}>;
        onFocus?: React.FocusEventHandler<{}>;
        required?: boolean;
        sliderStyle?: React.CSSProperties;
        step?: number;
        style?: React.CSSProperties;
        value?: number;
    }
    export class Slider extends React.Component<SliderProps> {
    }

    namespace Switches {
        // what's not commonly overridden by Checkbox, RadioButton, or Toggle
        export interface CommonEnhancedSwitchProps<T> extends React.InputHTMLAttributes<{}>, React.Props<T> {
            label?: React.ReactNode;
        }

        export interface EnhancedSwitchProps extends CommonEnhancedSwitchProps<EnhancedSwitch> {
            // <input/> is element that get the 'other' properties
            className?: string;
            defaultSwitched?: boolean;
            disableFocusRipple?: boolean;
            disableTouchRipple?: boolean;
            disabled?: boolean;
            iconStyle?: React.CSSProperties;
            id?: string;
            inputStyle: React.CSSProperties;
            inputType: string;
            labelPosition?: string; // oneOf(['left', 'right'])
            labelStyle?: React.CSSProperties;
            name?: string;
            onBlur?: React.FocusEventHandler<{}>;
            onFocus?: React.FocusEventHandler<{}>;
            onMouseDown?: React.MouseEventHandler<{}>;
            onMouseLeave?: React.MouseEventHandler<{}>;
            onMouseUp?: React.MouseEventHandler<{}>;
            onParentShouldUpdate(isInputChecked: boolean): void;
            onSwitch?(e: React.MouseEvent<{}>, isInputChecked: boolean): void;
            onTouchEnd?: React.TouchEventHandler<{}>;
            onTouchStart?: React.TouchEventHandler<{}>;
            required?: boolean;
            rippleColor?: string;
            rippleStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            switchElement: React.ReactElement<any>;
            switched: boolean;
            thumbStyle?: React.CSSProperties;
            trackStyle?: React.CSSProperties;
            value?: string;
        }
        export class EnhancedSwitch extends React.Component<EnhancedSwitchProps> {
            getValue(): string;
            isKeyboardFocused(): boolean;
            isSwitched(): boolean;
            setSwitched(newSwitchedValue: boolean): void;
        }

        export interface CheckboxProps extends CommonEnhancedSwitchProps<Checkbox> {
            // <EnhancedSwitch/> is element that get the 'other' properties
            checked?: boolean;
            checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            defaultChecked?: boolean;
            disabled?: boolean;
            iconStyle?: React.CSSProperties;
            labelPosition?: "left" | "right";
            labelStyle?: React.CSSProperties;
            onCheck?(event: React.MouseEvent<{}>, checked: boolean): void;
            style?: React.CSSProperties;
            uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            valueLink?: ReactLink<boolean>;
            inputStyle?: React.CSSProperties;
        }
        export class Checkbox extends React.Component<CheckboxProps> {
            /** @deprecated Use checked property instead */
            isChecked(): void;

            /** @deprecated Use checked property instead */
            setChecked(newCheckedValue: boolean): void;
        }

        export interface RadioButtonProps extends CommonEnhancedSwitchProps<RadioButton> {
            // <EnhancedSwitch/> is element that get the 'other' properties
            checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            disabled?: boolean;
            iconStyle?: React.CSSProperties;
            inputStyle?: React.CSSProperties;
            labelStyle?: React.CSSProperties;
            onCheck?(e: React.FormEvent<{}>, selected: string): void;
            style?: React.CSSProperties;
            uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            value?: any;
        }
        export class RadioButton extends React.Component<RadioButtonProps> {
            isChecked(): boolean;

            getValue(): string;
        }

        export interface RadioButtonGroupProps {
            className?: string;
            defaultSelected?: any;
            labelPosition?: "left" | "right";
            name: string;
            onChange?(e: React.FormEvent<{}>, selected: string): void;
            style?: React.CSSProperties;
            valueSelected?: any;
        }
        export class RadioButtonGroup extends React.Component<RadioButtonGroupProps> {
            clearValue(): void;

            getSelectedValue(): string;

            setSelectedValue(newSelectionValue: string): void;
        }

        export interface ToggleProps extends CommonEnhancedSwitchProps<Toggle> {
            // <EnhancedSwitch/> is element that get the 'other' properties
            defaultToggled?: boolean;
            disabled?: boolean;
            elementStyle?: React.CSSProperties;
            iconStyle?: React.CSSProperties;
            inputStyle?: React.CSSProperties;
            label?: React.ReactNode;
            labelPosition?: "left" | "right";
            labelStyle?: React.CSSProperties;
            onToggle?(e: React.MouseEvent<{}>, isInputChecked: boolean): void;
            rippleStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            thumbStyle?: React.CSSProperties;
            thumbSwitchedStyle?: React.CSSProperties;
            trackSwitchedStyle?: React.CSSProperties;
            toggled?: boolean;
            trackStyle?: React.CSSProperties;
            valueLink?: ReactLink<boolean>;
        }
        export class Toggle extends React.Component<ToggleProps> {
            isToggled(): boolean;

            setToggled(newToggledValue: boolean): void;
        }
    }

    export interface SnackbarProps {
        action?: React.ReactNode;
        autoHideDuration?: number;
        bodyStyle?: React.CSSProperties;
        className?: string;
        contentStyle?: React.CSSProperties;
        message: React.ReactNode;
        onActionClick?: React.MouseEventHandler<{}>;
        onRequestClose?(reason: string): void;
        open: boolean;
        style?: React.CSSProperties;
    }
    export class Snackbar extends React.Component<SnackbarProps> {
    }

    namespace Stepper {
        export interface StepProps {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            style?: React.CSSProperties;
        }
        export class Step extends React.Component<StepProps> {
        }

        export interface StepButtonProps extends SharedEnhancedButtonProps<StepButton> {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            icon?: React.ReactNode | string | number;
            onMouseEnter?: React.MouseEventHandler<{}>;
            onMouseLeave?: React.MouseEventHandler<{}>;
            onTouchStart?: React.TouchEventHandler<{}>;
            style?: React.CSSProperties;
        }
        export class StepButton extends React.Component<StepButtonProps> {
        }

        export interface StepContentProps {
            active?: boolean;
            last?: boolean;
            style?: React.CSSProperties;
        }
        export class StepContent extends React.Component<StepContentProps> {
        }

        export interface StepLabelProps {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            icon?: React.ReactNode | string | number;
            iconContainerStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class StepLabel extends React.Component<StepLabelProps> {
        }

        export interface SnackbarProps extends React.Props<Snackbar> {
            action?: string;
            autoHideDuration?: number;
            bodyStyle?: React.CSSProperties;
            className?: string;
            message: string | JSX.Element;
            onActionClick?: React.MouseEventHandler<{}>;
            /** @deprecated Use the open property to control the component instead */
            onDismiss?(): void; // DEPRECATED
            onRequestClose(reason: string): void;
            /** @deprecated Use the open property to control the component instead */
            onShow?(): void; // DEPRECATED
            open: boolean;
            /** @deprecated Use the open property to control the component instead */
            openOnMount?: boolean; // DEPRECATED
        }

        export interface StepperProps {
            activeStep?: number;
            linear?: boolean;
            orientation?: "horizontal" | "vertical";
            style?: React.CSSProperties;
        }
        export class Stepper extends React.Component<StepperProps> {
        }
    }

    export interface SubheaderProps {
        inset?: boolean;
        style?: React.CSSProperties;
    }
    export class Subheader extends React.Component<SubheaderProps> {
    }

    namespace Table {
        export interface TableProps {
            allRowsSelected?: boolean;
            bodyStyle?: React.CSSProperties;
            className?: string;
            fixedFooter?: boolean;
            fixedHeader?: boolean;
            footerStyle?: React.CSSProperties;
            headerStyle?: React.CSSProperties;
            height?: string;
            multiSelectable?: boolean;
            onCellClick?(row: number, column: number): void;
            onCellHover?(row: number, column: number): void;
            onCellHoverExit?(row: number, column: number): void;
            onRowHover?(row: number): void;
            onRowHoverExit?(row: number): void;
            onRowSelection?(selectedRows: number[] | 'all'): void;
            selectable?: boolean;
            style?: React.CSSProperties;
            wrapperStyle?: React.CSSProperties;
        }
        export class Table extends React.Component<TableProps> {
        }

        export interface TableRowProps {
            // <tr/> is element that get the 'other' properties
            className?: string;
            displayBorder?: boolean;
            hoverable?: boolean;
            hovered?: boolean;
            /** @deprecated Instead, use event handler on Table */
            onCellClick?(e: React.MouseEvent<{}>, row: number, column: number): void;
            /** @deprecated Instead, use event handler on Table */
            onCellHover?(e: React.MouseEvent<{}>, row: number, column: number): void;
            /** @deprecated Instead, use event handler on Table */
            onCellHoverExit?(e: React.MouseEvent<{}>, row: number, column: number): void;
            /** @deprecated Instead, use event handler on Table */
            onRowClick?(e: React.MouseEvent<{}>, row: number): void;
            /** @deprecated Instead, use event handler on Table */
            onRowHover?(e: React.MouseEvent<{}>, row: number): void;
            /** @deprecated Instead, use event handler on Table */
            onRowHoverExit?(e: React.MouseEvent<{}>, row: number): void;
            rowNumber?: number;
            selectable?: boolean;
            selected?: boolean;
            striped?: boolean;
            style?: React.CSSProperties;
        }
        export class TableRow extends React.Component<TableRowProps> {
        }

        export interface TableRowColumnProps {
            // <td/> is element that get the 'other' properties
            className?: string;
            columnNumber?: number;
            hoverable?: boolean;
            key?: string;
            /** @deprecated Instead, use event handler on Table */
            onClick?(e: React.MouseEvent<{}>, column: number): void;
            /** @deprecated Instead, use event handler on Table */
            onHover?(e: React.MouseEvent<{}>, column: number): void;
            /** @deprecated Instead, use event handler on Table */
            onHoverExit?(e: React.MouseEvent<{}>, column: number): void;
            style?: React.CSSProperties;

            // useful attributes passed to <td/>
            colSpan?: number;
            rowSpan?: number;
        }
        export class TableRowColumn extends React.Component<TableRowColumnProps> {
        }

        export interface TableHeaderProps {
            adjustForCheckbox?: boolean;
            className?: string;
            displaySelectAll?: boolean;
            enableSelectAll?: boolean;
            /** @deprecated Instead, use event handler on Table */
            onSelectAll?(checked: boolean): void;
            /** @deprecated Instead, use event handler on Table */
            selectAllSelected?: boolean;
            style?: React.CSSProperties;
        }
        export class TableHeader extends React.Component<TableHeaderProps> {
        }

        export interface TableHeaderColumnProps {
            // <th/> is element that get the 'other' properties
            className?: string;
            columnNumber?: number;
            key?: string;
            onClick?(e: React.MouseEvent<{}>, column: number): void;
            style?: React.CSSProperties;
            tooltip?: string;
            tooltipStyle?: React.CSSProperties;

            // useful attributes passed to <th/>
            colSpan?: number;
            rowSpan?: number;
        }
        export class TableHeaderColumn extends React.Component<TableHeaderColumnProps> {
        }

        export interface TableBodyProps {
            /** @deprecated Instead, use property on Table */
            allRowsSelected?: boolean;
            className?: string;
            deselectOnClickaway?: boolean;
            displayRowCheckbox?: boolean;
            /** @deprecated Instead, use property on Table */
            multiSelectable?: boolean;
            /** @deprecated Instead, use event handler on Table */
            onCellClick?(row: number, column: number): void;
            /** @deprecated Instead, use event handler on Table */
            onCellHover?(row: number, column: number): void;
            /** @deprecated Instead, use event handler on Table */
            onCellHoverExit?(row: number, column: number): void;
            /** @deprecated Instead, use event handler on Table */
            onRowHover?(row: number): void;
            /** @deprecated Instead, use event handler on Table */
            onRowHoverExit?(row: number): void;
            /** @deprecated Instead, use event handler on Table */
            onRowSelection?(selectedRows: number[] | string): void;
            preScanRows?: boolean;
            /** @deprecated Instead, use property on Table */
            selectable?: boolean;
            showRowHover?: boolean;
            stripedRows?: boolean;
            style?: React.CSSProperties;
        }
        export class TableBody extends React.Component<TableBodyProps> {
        }

        export interface TableFooterProps {
            // <tfoot/> is element that get the 'other' properties
            adjustForCheckbox?: boolean;
            className?: string;
            style?: React.CSSProperties;
        }
        export class TableFooter extends React.Component<TableFooterProps> {
        }
    }

    namespace Tabs {
        export interface TabsProps {
            className?: string;
            contentContainerClassName?: string;
            contentContainerStyle?: React.CSSProperties;
            initialSelectedIndex?: number;
            inkBarStyle?: React.CSSProperties;
            onChange?(value: any, e: React.FormEvent<{}>, tab: Tab): void;
            style?: React.CSSProperties;
            tabItemContainerStyle?: React.CSSProperties;
            tabTemplate?: React.ComponentClass<any>;
            tabTemplateStyle?: React.CSSProperties;
            value?: any;
        }
        export class Tabs extends React.Component<TabsProps> {
        }

        export interface TabProps extends SharedEnhancedButtonProps<Tab> {
            buttonStyle?: React.CSSProperties;
            className?: string;
            icon?: React.ReactNode;
            label?: React.ReactNode;
            onActive?(tab: Tab): void;
            style?: React.CSSProperties;
            value?: any;
            disabled?: boolean;
        }
        export class Tab extends React.Component<TabProps> {
        }
    }

    export interface TextFieldProps {
        className?: string;
        defaultValue?: string | number;
        disabled?: boolean;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        floatingLabelFixed?: boolean;
        floatingLabelFocusStyle?: React.CSSProperties;
        floatingLabelShrinkStyle?: React.CSSProperties;
        floatingLabelStyle?: React.CSSProperties;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintStyle?: React.CSSProperties;
        hintText?: React.ReactNode;
        id?: string;
        inputStyle?: React.CSSProperties;
        multiLine?: boolean;
        name?: string;
        onBlur?: React.FocusEventHandler<{}>;
        onChange?(e: React.FormEvent<{}>, newValue: string): void;
        onFocus?: React.FocusEventHandler<{}>;
        onKeyDown?: React.KeyboardEventHandler<{}>;
        onKeyUp?: React.KeyboardEventHandler<{}>;
        onKeyPress?: React.KeyboardEventHandler<{}>;
        required?: boolean;
        rows?: number;
        rowsMax?: number;
        style?: React.CSSProperties;
        textareaStyle?: React.CSSProperties;
        type?: string;
        underlineDisabledStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineShow?: boolean;
        underlineStyle?: React.CSSProperties;
        value?: string | number;
        autoFocus?: boolean;
        min?: number;
        max?: number;
        maxlength?: string;
        minlength?: string;
        step?: number;
        autoComplete?: string;
        placeholder?: string;
        title?: string;
    }
    export class TextField extends React.Component<TextFieldProps> {
        blur(): void;

        focus(): void;

        select(): void;

        getValue(): string;

        getInputNode(): HTMLInputElement;
    }

    export interface TimePickerProps {
        // <TextField/> is element that get the 'other' properties
        autoOk?: boolean;
        cancelLabel?: React.ReactNode;
        defaultTime?: Date;
        dialogBodyStyle?: React.CSSProperties;
        dialogStyle?: React.CSSProperties;
        disabled?: boolean;
        format?: "ampm" | "24hr";
        minutesStep?: number;
        okLabel?: React.ReactNode;
        onChange?(e: any, time: Date): void;
        onDismiss?(): void;
        onFocus?: React.FocusEventHandler<{}>;
        onShow?(): void;
        onClick?: React.MouseEventHandler<{}>;
        pedantic?: boolean;
        style?: React.CSSProperties;
        textFieldStyle?: React.CSSProperties;
        value?: Date;

        // From <TextField />
        className?: string;
        defaultValue?: string | number;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        floatingLabelFixed?: boolean;
        floatingLabelFocusStyle?: React.CSSProperties;
        floatingLabelStyle?: React.CSSProperties;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintStyle?: React.CSSProperties;
        hintText?: React.ReactNode;
        id?: string;
        inputStyle?: React.CSSProperties;
        multiLine?: boolean;
        name?: string;
        onBlur?: React.FocusEventHandler<{}>;
        onKeyDown?: React.KeyboardEventHandler<{}>;
        rows?: number;
        rowsMax?: number;
        textareaStyle?: React.CSSProperties;
        type?: string;
        underlineDisabledStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineShow?: boolean;
        underlineStyle?: React.CSSProperties;
    }
    export class TimePicker extends React.Component<TimePickerProps> {
        focus(): void;

        openDialog(): void;
    }

    export namespace Toolbar {
        export interface ToolbarProps {
            className?: string;
            noGutter?: boolean;
            style?: React.CSSProperties;
        }
        export class Toolbar extends React.Component<ToolbarProps> {
        }

        export interface ToolbarGroupProps {
            className?: string;
            firstChild?: boolean;
            float?: "left" | "right";
            lastChild?: boolean;
            style?: React.CSSProperties;
        }
        export class ToolbarGroup extends React.Component<ToolbarGroupProps> {
        }

        export interface ToolbarSeparatorProps {
            className?: string;
            style?: React.CSSProperties;
        }
        export class ToolbarSeparator extends React.Component<ToolbarSeparatorProps> {
        }

        export interface ToolbarTitleProps extends React.HTMLAttributes<{}>, React.Props<ToolbarTitle> {
            className?: string;
            style?: React.CSSProperties;
            text?: string;
        }
        export class ToolbarTitle extends React.Component<ToolbarTitleProps> {
        }
    }

    export namespace Utils {
        export namespace ColorManipulator {
            interface MuiColorObject {
                type: string;
                values: number[];
            }
            function convertColorToString(color: any): string;

            function convertHexToRGB(color: string): string;

            function decomposeColor(color: string): MuiColorObject;

            function getContrastRatio(foreground: string, background: string): number;

            function getLuminance(color: string): number;

            function emphasize(color: string, coefficient?: number): string;

            function fade(color: string, value: number): string;

            function darken(color: string, coefficient: number): string;

            function lighten(color: string, coefficient: number): string;
        }

        interface Dom {
            addClass(el: Element, className: string): void;
            forceRedraw(el: HTMLElement): void;
            getStyleAttributeAsNumber(el: HTMLElement, attr: string): number;
            hasClass(el: Element, className: string): boolean;
            isDescendant(parent: Node, child: Node): boolean;
            offset(el: Element): { top: number, left: number };
            removeClass(el: Element, className: string): void;
            toggleClass(el: Element, className: string): void;
            withoutTransition(el: HTMLElement, callback: () => void): void;
        }
        export let Dom: Dom;

        interface Events {
            isKeyboard(e: Event): boolean;
            off(el: Element, type: string, callback: EventListener): void;
            on(el: Element, type: string, callback: EventListener): void;
            once(el: Element, type: string, callback: EventListener): void;
        }
        export let Events: Events;
    }
}    // __MaterialUi

declare module 'material-ui/AppBar' {
    export import AppBar = __MaterialUi.AppBar;
    export default AppBar;
}

declare module 'material-ui/AutoComplete' {
    export import AutoComplete = __MaterialUi.AutoComplete;
    export default AutoComplete;
}

declare module 'material-ui/Avatar' {
    export import Avatar = __MaterialUi.Avatar;
    export default Avatar;
}

declare module "material-ui/Badge" {
    export import Badge = __MaterialUi.Badge;
    export default Badge;
}

declare module 'material-ui/BottomNavigation' {
    export import BottomNavigation = __MaterialUi.BottomNavigation.BottomNavigation;
    export import BottomNavigationItem = __MaterialUi.BottomNavigation.BottomNavigationItem;
    export default BottomNavigation;
}

declare module 'material-ui/BottomNavigation/BottomNavigationItem' {
    export import BottomNavigationItem = __MaterialUi.BottomNavigation.BottomNavigationItem;
    export default BottomNavigationItem;
}

declare module 'material-ui/Card' {
    export import Card = __MaterialUi.Card.Card;
    export import CardActions = __MaterialUi.Card.CardActions;
    export import CardExpandable = __MaterialUi.Card.CardExpandable;
    export import CardHeader = __MaterialUi.Card.CardHeader;
    export import CardMedia = __MaterialUi.Card.CardMedia;
    export import CardText = __MaterialUi.Card.CardText;
    export import CardTitle = __MaterialUi.Card.CardTitle;
    export default Card;
}

declare module 'material-ui/Card/Card' {
    export import Card = __MaterialUi.Card.Card;
    export default Card;
}

declare module 'material-ui/Card/CardActions' {
    export import CardActions = __MaterialUi.Card.CardActions;
    export default CardActions;
}

declare module 'material-ui/Card/CardExpandable' {
    export import CardExpandable = __MaterialUi.Card.CardExpandable;
    export default CardExpandable;
}

declare module 'material-ui/Card/CardHeader' {
    export import CardHeader = __MaterialUi.Card.CardHeader;
    export default CardHeader;
}

declare module 'material-ui/Card/CardMedia' {
    export import CardMedia = __MaterialUi.Card.CardMedia;
    export default CardMedia;
}

declare module 'material-ui/Card/CardText' {
    export import CardText = __MaterialUi.Card.CardText;
    export default CardText;
}

declare module 'material-ui/Card/CardTitle' {
    export import CardTitle = __MaterialUi.Card.CardTitle;
    export default CardTitle;
}

declare module 'material-ui/Checkbox' {
    export import Checkbox = __MaterialUi.Switches.Checkbox;
    export default Checkbox;
}

declare module 'material-ui/Chip' {
    export import Chip = __MaterialUi.Chip;
    export default Chip;
}

declare module 'material-ui/CircularProgress' {
    export import CircularProgress = __MaterialUi.CircularProgress;
    export default CircularProgress;
}

declare module 'material-ui/DatePicker' {
    export import DatePicker = __MaterialUi.DatePicker.DatePicker;
    export default DatePicker;
}

declare module 'material-ui/DatePicker/DatePickerDialog' {
    export import DatePickerDialog = __MaterialUi.DatePicker.DatePickerDialog;
    export default DatePickerDialog;
}

declare module 'material-ui/Dialog' {
    export import Dialog = __MaterialUi.Dialog;
    export default Dialog;
}

declare module "material-ui/Divider" {
    export import Divider = __MaterialUi.Divider;
    export default Divider;
}

declare module 'material-ui/Drawer' {
    export import Drawer = __MaterialUi.Drawer;
    export default Drawer;
}

declare module 'material-ui/DropDownMenu' {
    export import DropDownMenu = __MaterialUi.Menus.DropDownMenu;
    export default DropDownMenu;
}

declare module 'material-ui/FlatButton' {
    export import FlatButton = __MaterialUi.FlatButton;
    export default FlatButton;
}

declare module 'material-ui/FloatingActionButton' {
    export import FloatingActionButton = __MaterialUi.FloatingActionButton;
    export default FloatingActionButton;
}

declare module 'material-ui/FontIcon' {
    export import FontIcon = __MaterialUi.FontIcon;
    export default FontIcon;
}

declare module "material-ui/GridList" {
    export import GridList = __MaterialUi.GridList.GridList;
    export import GridTile = __MaterialUi.GridList.GridTile;
    export default GridList;
}

declare module "material-ui/GridList/GridList" {
    export import GridList = __MaterialUi.GridList.GridList;
    export default GridList;
}

declare module "material-ui/GridList/GridTile" {
    export import GridTile = __MaterialUi.GridList.GridTile;
    export default GridTile;
}

declare module 'material-ui/IconButton' {
    export import IconButton = __MaterialUi.IconButton;
    export default IconButton;
}

declare module "material-ui/IconMenu" {
    export import IconMenu = __MaterialUi.Menus.IconMenu;
    export default IconMenu;
}

declare module 'material-ui/LinearProgress' {
    export import LinearProgress = __MaterialUi.LinearProgress;
    export default LinearProgress;
}

declare module 'material-ui/List' {
    export import List = __MaterialUi.List.List;
    export import ListItem = __MaterialUi.List.ListItem;
    export import makeSelectable = __MaterialUi.List.makeSelectable;
    export default List;
}

declare module 'material-ui/List/List' {
    export import List = __MaterialUi.List.List;
    export default List;
}

declare module 'material-ui/List/ListItem' {
    export import ListItem = __MaterialUi.List.ListItem;
    export default ListItem;
}

declare module 'material-ui/List/makeSelectable' {
    export import makeSelectable = __MaterialUi.List.makeSelectable;
    export default makeSelectable;
}

declare module "material-ui/Menu" {
    export import Menu = __MaterialUi.Menus.Menu;
    export import MenuItem = __MaterialUi.Menus.MenuItem;
    export default Menu;
}

declare module "material-ui/MenuItem" {
    export import MenuItem = __MaterialUi.Menus.MenuItem;
    export default MenuItem;
}

declare module 'material-ui/Paper' {
    export import Paper = __MaterialUi.Paper;
    export default Paper;
}

declare module 'material-ui/Popover' {
    export import Popover = __MaterialUi.Popover.Popover;
    export import PopoverAnimationVertical = __MaterialUi.Popover.PopoverAnimationVertical;
    export default Popover;
}

declare module 'material-ui/Popover/Popover' {
    export import Popover = __MaterialUi.Popover.Popover;
    export default Popover;
}

declare module 'material-ui/Popover/PopoverAnimationDefault' {
    export import PopoverAnimationDefault = __MaterialUi.Popover.PopoverAnimationDefault;
    export default PopoverAnimationDefault;
}

declare module 'material-ui/Popover/PopoverAnimationVertical' {
    export import PopoverAnimationVertical = __MaterialUi.Popover.PopoverAnimationVertical;
    export default PopoverAnimationVertical;
}

declare module 'material-ui/RadioButton' {
    export import RadioButton = __MaterialUi.Switches.RadioButton;
    export import RadioButtonGroup = __MaterialUi.Switches.RadioButtonGroup;
    export default RadioButton;
}

declare module 'material-ui/RadioButton/RadioButtonGroup' {
    export import RadioButtonGroup = __MaterialUi.Switches.RadioButtonGroup;
    export default RadioButtonGroup;
}

declare module 'material-ui/RaisedButton' {
    export import RaisedButton = __MaterialUi.RaisedButton;
    export default RaisedButton;
}

declare module 'material-ui/RefreshIndicator' {
    export import RefreshIndicator = __MaterialUi.RefreshIndicator;
    export default RefreshIndicator;
}

declare module 'material-ui/SelectField' {
    export import SelectField = __MaterialUi.SelectField;
    export default SelectField;
}

declare module 'material-ui/Slider' {
    export import Slider = __MaterialUi.Slider;
    export default Slider;
}

declare module 'material-ui/Snackbar' {
    export import Snackbar = __MaterialUi.Snackbar;
    export default Snackbar;
}

declare module 'material-ui/Stepper' {
    export import Step = __MaterialUi.Stepper.Step;
    export import StepButton = __MaterialUi.Stepper.StepButton;
    export import StepContent = __MaterialUi.Stepper.StepContent;
    export import StepLabel = __MaterialUi.Stepper.StepLabel;
    export import Stepper = __MaterialUi.Stepper.Stepper;
}

declare module 'material-ui/Subheader' {
    export import Subheader = __MaterialUi.Subheader;
    export default Subheader;
}

declare module 'material-ui/SvgIcon' {
    export import SvgIcon = __MaterialUi.SvgIcon;
    export default SvgIcon;
}

// DO NOT EDIT
// This code is generated by scripts/material-ui/generate.js
// {{{
declare module 'material-ui/svg-icons/action/accessibility' {
    export import ActionAccessibility = __MaterialUi.SvgIcon;
    export default ActionAccessibility;
}

declare module 'material-ui/svg-icons/action/accessible' {
    export import ActionAccessible = __MaterialUi.SvgIcon;
    export default ActionAccessible;
}

declare module 'material-ui/svg-icons/action/account-balance' {
    export import ActionAccountBalance = __MaterialUi.SvgIcon;
    export default ActionAccountBalance;
}

declare module 'material-ui/svg-icons/action/account-balance-wallet' {
    export import ActionAccountBalanceWallet = __MaterialUi.SvgIcon;
    export default ActionAccountBalanceWallet;
}

declare module 'material-ui/svg-icons/action/account-box' {
    export import ActionAccountBox = __MaterialUi.SvgIcon;
    export default ActionAccountBox;
}

declare module 'material-ui/svg-icons/action/account-circle' {
    export import ActionAccountCircle = __MaterialUi.SvgIcon;
    export default ActionAccountCircle;
}

declare module 'material-ui/svg-icons/action/add-shopping-cart' {
    export import ActionAddShoppingCart = __MaterialUi.SvgIcon;
    export default ActionAddShoppingCart;
}

declare module 'material-ui/svg-icons/action/alarm' {
    export import ActionAlarm = __MaterialUi.SvgIcon;
    export default ActionAlarm;
}

declare module 'material-ui/svg-icons/action/alarm-add' {
    export import ActionAlarmAdd = __MaterialUi.SvgIcon;
    export default ActionAlarmAdd;
}

declare module 'material-ui/svg-icons/action/alarm-off' {
    export import ActionAlarmOff = __MaterialUi.SvgIcon;
    export default ActionAlarmOff;
}

declare module 'material-ui/svg-icons/action/alarm-on' {
    export import ActionAlarmOn = __MaterialUi.SvgIcon;
    export default ActionAlarmOn;
}

declare module 'material-ui/svg-icons/action/all-out' {
    export import ActionAllOut = __MaterialUi.SvgIcon;
    export default ActionAllOut;
}

declare module 'material-ui/svg-icons/action/android' {
    export import ActionAndroid = __MaterialUi.SvgIcon;
    export default ActionAndroid;
}

declare module 'material-ui/svg-icons/action/announcement' {
    export import ActionAnnouncement = __MaterialUi.SvgIcon;
    export default ActionAnnouncement;
}

declare module 'material-ui/svg-icons/action/aspect-ratio' {
    export import ActionAspectRatio = __MaterialUi.SvgIcon;
    export default ActionAspectRatio;
}

declare module 'material-ui/svg-icons/action/assessment' {
    export import ActionAssessment = __MaterialUi.SvgIcon;
    export default ActionAssessment;
}

declare module 'material-ui/svg-icons/action/assignment' {
    export import ActionAssignment = __MaterialUi.SvgIcon;
    export default ActionAssignment;
}

declare module 'material-ui/svg-icons/action/assignment-ind' {
    export import ActionAssignmentInd = __MaterialUi.SvgIcon;
    export default ActionAssignmentInd;
}

declare module 'material-ui/svg-icons/action/assignment-late' {
    export import ActionAssignmentLate = __MaterialUi.SvgIcon;
    export default ActionAssignmentLate;
}

declare module 'material-ui/svg-icons/action/assignment-return' {
    export import ActionAssignmentReturn = __MaterialUi.SvgIcon;
    export default ActionAssignmentReturn;
}

declare module 'material-ui/svg-icons/action/assignment-returned' {
    export import ActionAssignmentReturned = __MaterialUi.SvgIcon;
    export default ActionAssignmentReturned;
}

declare module 'material-ui/svg-icons/action/assignment-turned-in' {
    export import ActionAssignmentTurnedIn = __MaterialUi.SvgIcon;
    export default ActionAssignmentTurnedIn;
}

declare module 'material-ui/svg-icons/action/autorenew' {
    export import ActionAutorenew = __MaterialUi.SvgIcon;
    export default ActionAutorenew;
}

declare module 'material-ui/svg-icons/action/backup' {
    export import ActionBackup = __MaterialUi.SvgIcon;
    export default ActionBackup;
}

declare module 'material-ui/svg-icons/action/book' {
    export import ActionBook = __MaterialUi.SvgIcon;
    export default ActionBook;
}

declare module 'material-ui/svg-icons/action/bookmark' {
    export import ActionBookmark = __MaterialUi.SvgIcon;
    export default ActionBookmark;
}

declare module 'material-ui/svg-icons/action/bookmark-border' {
    export import ActionBookmarkBorder = __MaterialUi.SvgIcon;
    export default ActionBookmarkBorder;
}

declare module 'material-ui/svg-icons/action/bug-report' {
    export import ActionBugReport = __MaterialUi.SvgIcon;
    export default ActionBugReport;
}

declare module 'material-ui/svg-icons/action/build' {
    export import ActionBuild = __MaterialUi.SvgIcon;
    export default ActionBuild;
}

declare module 'material-ui/svg-icons/action/cached' {
    export import ActionCached = __MaterialUi.SvgIcon;
    export default ActionCached;
}

declare module 'material-ui/svg-icons/action/camera-enhance' {
    export import ActionCameraEnhance = __MaterialUi.SvgIcon;
    export default ActionCameraEnhance;
}

declare module 'material-ui/svg-icons/action/card-giftcard' {
    export import ActionCardGiftcard = __MaterialUi.SvgIcon;
    export default ActionCardGiftcard;
}

declare module 'material-ui/svg-icons/action/card-membership' {
    export import ActionCardMembership = __MaterialUi.SvgIcon;
    export default ActionCardMembership;
}

declare module 'material-ui/svg-icons/action/card-travel' {
    export import ActionCardTravel = __MaterialUi.SvgIcon;
    export default ActionCardTravel;
}

declare module 'material-ui/svg-icons/action/change-history' {
    export import ActionChangeHistory = __MaterialUi.SvgIcon;
    export default ActionChangeHistory;
}

declare module 'material-ui/svg-icons/action/check-circle' {
    export import ActionCheckCircle = __MaterialUi.SvgIcon;
    export default ActionCheckCircle;
}

declare module 'material-ui/svg-icons/action/chrome-reader-mode' {
    export import ActionChromeReaderMode = __MaterialUi.SvgIcon;
    export default ActionChromeReaderMode;
}

declare module 'material-ui/svg-icons/action/class' {
    export import ActionClass = __MaterialUi.SvgIcon;
    export default ActionClass;
}

declare module 'material-ui/svg-icons/action/code' {
    export import ActionCode = __MaterialUi.SvgIcon;
    export default ActionCode;
}

declare module 'material-ui/svg-icons/action/compare-arrows' {
    export import ActionCompareArrows = __MaterialUi.SvgIcon;
    export default ActionCompareArrows;
}

declare module 'material-ui/svg-icons/action/copyright' {
    export import ActionCopyright = __MaterialUi.SvgIcon;
    export default ActionCopyright;
}

declare module 'material-ui/svg-icons/action/credit-card' {
    export import ActionCreditCard = __MaterialUi.SvgIcon;
    export default ActionCreditCard;
}

declare module 'material-ui/svg-icons/action/dashboard' {
    export import ActionDashboard = __MaterialUi.SvgIcon;
    export default ActionDashboard;
}

declare module 'material-ui/svg-icons/action/date-range' {
    export import ActionDateRange = __MaterialUi.SvgIcon;
    export default ActionDateRange;
}

declare module 'material-ui/svg-icons/action/delete' {
    export import ActionDelete = __MaterialUi.SvgIcon;
    export default ActionDelete;
}

declare module 'material-ui/svg-icons/action/delete-forever' {
    export import ActionDeleteForever = __MaterialUi.SvgIcon;
    export default ActionDeleteForever;
}

declare module 'material-ui/svg-icons/action/description' {
    export import ActionDescription = __MaterialUi.SvgIcon;
    export default ActionDescription;
}

declare module 'material-ui/svg-icons/action/dns' {
    export import ActionDns = __MaterialUi.SvgIcon;
    export default ActionDns;
}

declare module 'material-ui/svg-icons/action/done' {
    export import ActionDone = __MaterialUi.SvgIcon;
    export default ActionDone;
}

declare module 'material-ui/svg-icons/action/done-all' {
    export import ActionDoneAll = __MaterialUi.SvgIcon;
    export default ActionDoneAll;
}

declare module 'material-ui/svg-icons/action/donut-large' {
    export import ActionDonutLarge = __MaterialUi.SvgIcon;
    export default ActionDonutLarge;
}

declare module 'material-ui/svg-icons/action/donut-small' {
    export import ActionDonutSmall = __MaterialUi.SvgIcon;
    export default ActionDonutSmall;
}

declare module 'material-ui/svg-icons/action/eject' {
    export import ActionEject = __MaterialUi.SvgIcon;
    export default ActionEject;
}

declare module 'material-ui/svg-icons/action/euro-symbol' {
    export import ActionEuroSymbol = __MaterialUi.SvgIcon;
    export default ActionEuroSymbol;
}

declare module 'material-ui/svg-icons/action/event' {
    export import ActionEvent = __MaterialUi.SvgIcon;
    export default ActionEvent;
}

declare module 'material-ui/svg-icons/action/event-seat' {
    export import ActionEventSeat = __MaterialUi.SvgIcon;
    export default ActionEventSeat;
}

declare module 'material-ui/svg-icons/action/exit-to-app' {
    export import ActionExitToApp = __MaterialUi.SvgIcon;
    export default ActionExitToApp;
}

declare module 'material-ui/svg-icons/action/explore' {
    export import ActionExplore = __MaterialUi.SvgIcon;
    export default ActionExplore;
}

declare module 'material-ui/svg-icons/action/extension' {
    export import ActionExtension = __MaterialUi.SvgIcon;
    export default ActionExtension;
}

declare module 'material-ui/svg-icons/action/face' {
    export import ActionFace = __MaterialUi.SvgIcon;
    export default ActionFace;
}

declare module 'material-ui/svg-icons/action/favorite' {
    export import ActionFavorite = __MaterialUi.SvgIcon;
    export default ActionFavorite;
}

declare module 'material-ui/svg-icons/action/favorite-border' {
    export import ActionFavoriteBorder = __MaterialUi.SvgIcon;
    export default ActionFavoriteBorder;
}

declare module 'material-ui/svg-icons/action/feedback' {
    export import ActionFeedback = __MaterialUi.SvgIcon;
    export default ActionFeedback;
}

declare module 'material-ui/svg-icons/action/find-in-page' {
    export import ActionFindInPage = __MaterialUi.SvgIcon;
    export default ActionFindInPage;
}

declare module 'material-ui/svg-icons/action/find-replace' {
    export import ActionFindReplace = __MaterialUi.SvgIcon;
    export default ActionFindReplace;
}

declare module 'material-ui/svg-icons/action/fingerprint' {
    export import ActionFingerprint = __MaterialUi.SvgIcon;
    export default ActionFingerprint;
}

declare module 'material-ui/svg-icons/action/flight-land' {
    export import ActionFlightLand = __MaterialUi.SvgIcon;
    export default ActionFlightLand;
}

declare module 'material-ui/svg-icons/action/flight-takeoff' {
    export import ActionFlightTakeoff = __MaterialUi.SvgIcon;
    export default ActionFlightTakeoff;
}

declare module 'material-ui/svg-icons/action/flip-to-back' {
    export import ActionFlipToBack = __MaterialUi.SvgIcon;
    export default ActionFlipToBack;
}

declare module 'material-ui/svg-icons/action/flip-to-front' {
    export import ActionFlipToFront = __MaterialUi.SvgIcon;
    export default ActionFlipToFront;
}

declare module 'material-ui/svg-icons/action/g-translate' {
    export import ActionGTranslate = __MaterialUi.SvgIcon;
    export default ActionGTranslate;
}

declare module 'material-ui/svg-icons/action/gavel' {
    export import ActionGavel = __MaterialUi.SvgIcon;
    export default ActionGavel;
}

declare module 'material-ui/svg-icons/action/get-app' {
    export import ActionGetApp = __MaterialUi.SvgIcon;
    export default ActionGetApp;
}

declare module 'material-ui/svg-icons/action/gif' {
    export import ActionGif = __MaterialUi.SvgIcon;
    export default ActionGif;
}

declare module 'material-ui/svg-icons/action/grade' {
    export import ActionGrade = __MaterialUi.SvgIcon;
    export default ActionGrade;
}

declare module 'material-ui/svg-icons/action/group-work' {
    export import ActionGroupWork = __MaterialUi.SvgIcon;
    export default ActionGroupWork;
}

declare module 'material-ui/svg-icons/action/help' {
    export import ActionHelp = __MaterialUi.SvgIcon;
    export default ActionHelp;
}

declare module 'material-ui/svg-icons/action/help-outline' {
    export import ActionHelpOutline = __MaterialUi.SvgIcon;
    export default ActionHelpOutline;
}

declare module 'material-ui/svg-icons/action/highlight-off' {
    export import ActionHighlightOff = __MaterialUi.SvgIcon;
    export default ActionHighlightOff;
}

declare module 'material-ui/svg-icons/action/history' {
    export import ActionHistory = __MaterialUi.SvgIcon;
    export default ActionHistory;
}

declare module 'material-ui/svg-icons/action/home' {
    export import ActionHome = __MaterialUi.SvgIcon;
    export default ActionHome;
}

declare module 'material-ui/svg-icons/action/hourglass-empty' {
    export import ActionHourglassEmpty = __MaterialUi.SvgIcon;
    export default ActionHourglassEmpty;
}

declare module 'material-ui/svg-icons/action/hourglass-full' {
    export import ActionHourglassFull = __MaterialUi.SvgIcon;
    export default ActionHourglassFull;
}

declare module 'material-ui/svg-icons/action/http' {
    export import ActionHttp = __MaterialUi.SvgIcon;
    export default ActionHttp;
}

declare module 'material-ui/svg-icons/action/https' {
    export import ActionHttps = __MaterialUi.SvgIcon;
    export default ActionHttps;
}

declare module 'material-ui/svg-icons/action/important-devices' {
    export import ActionImportantDevices = __MaterialUi.SvgIcon;
    export default ActionImportantDevices;
}

declare module 'material-ui/svg-icons/action/info' {
    export import ActionInfo = __MaterialUi.SvgIcon;
    export default ActionInfo;
}

declare module 'material-ui/svg-icons/action/info-outline' {
    export import ActionInfoOutline = __MaterialUi.SvgIcon;
    export default ActionInfoOutline;
}

declare module 'material-ui/svg-icons/action/input' {
    export import ActionInput = __MaterialUi.SvgIcon;
    export default ActionInput;
}

declare module 'material-ui/svg-icons/action/invert-colors' {
    export import ActionInvertColors = __MaterialUi.SvgIcon;
    export default ActionInvertColors;
}

declare module 'material-ui/svg-icons/action/label' {
    export import ActionLabel = __MaterialUi.SvgIcon;
    export default ActionLabel;
}

declare module 'material-ui/svg-icons/action/label-outline' {
    export import ActionLabelOutline = __MaterialUi.SvgIcon;
    export default ActionLabelOutline;
}

declare module 'material-ui/svg-icons/action/language' {
    export import ActionLanguage = __MaterialUi.SvgIcon;
    export default ActionLanguage;
}

declare module 'material-ui/svg-icons/action/launch' {
    export import ActionLaunch = __MaterialUi.SvgIcon;
    export default ActionLaunch;
}

declare module 'material-ui/svg-icons/action/lightbulb-outline' {
    export import ActionLightbulbOutline = __MaterialUi.SvgIcon;
    export default ActionLightbulbOutline;
}

declare module 'material-ui/svg-icons/action/line-style' {
    export import ActionLineStyle = __MaterialUi.SvgIcon;
    export default ActionLineStyle;
}

declare module 'material-ui/svg-icons/action/line-weight' {
    export import ActionLineWeight = __MaterialUi.SvgIcon;
    export default ActionLineWeight;
}

declare module 'material-ui/svg-icons/action/list' {
    export import ActionList = __MaterialUi.SvgIcon;
    export default ActionList;
}

declare module 'material-ui/svg-icons/action/lock' {
    export import ActionLock = __MaterialUi.SvgIcon;
    export default ActionLock;
}

declare module 'material-ui/svg-icons/action/lock-open' {
    export import ActionLockOpen = __MaterialUi.SvgIcon;
    export default ActionLockOpen;
}

declare module 'material-ui/svg-icons/action/lock-outline' {
    export import ActionLockOutline = __MaterialUi.SvgIcon;
    export default ActionLockOutline;
}

declare module 'material-ui/svg-icons/action/loyalty' {
    export import ActionLoyalty = __MaterialUi.SvgIcon;
    export default ActionLoyalty;
}

declare module 'material-ui/svg-icons/action/markunread-mailbox' {
    export import ActionMarkunreadMailbox = __MaterialUi.SvgIcon;
    export default ActionMarkunreadMailbox;
}

declare module 'material-ui/svg-icons/action/motorcycle' {
    export import ActionMotorcycle = __MaterialUi.SvgIcon;
    export default ActionMotorcycle;
}

declare module 'material-ui/svg-icons/action/note-add' {
    export import ActionNoteAdd = __MaterialUi.SvgIcon;
    export default ActionNoteAdd;
}

declare module 'material-ui/svg-icons/action/offline-pin' {
    export import ActionOfflinePin = __MaterialUi.SvgIcon;
    export default ActionOfflinePin;
}

declare module 'material-ui/svg-icons/action/opacity' {
    export import ActionOpacity = __MaterialUi.SvgIcon;
    export default ActionOpacity;
}

declare module 'material-ui/svg-icons/action/open-in-browser' {
    export import ActionOpenInBrowser = __MaterialUi.SvgIcon;
    export default ActionOpenInBrowser;
}

declare module 'material-ui/svg-icons/action/open-in-new' {
    export import ActionOpenInNew = __MaterialUi.SvgIcon;
    export default ActionOpenInNew;
}

declare module 'material-ui/svg-icons/action/open-with' {
    export import ActionOpenWith = __MaterialUi.SvgIcon;
    export default ActionOpenWith;
}

declare module 'material-ui/svg-icons/action/pageview' {
    export import ActionPageview = __MaterialUi.SvgIcon;
    export default ActionPageview;
}

declare module 'material-ui/svg-icons/action/pan-tool' {
    export import ActionPanTool = __MaterialUi.SvgIcon;
    export default ActionPanTool;
}

declare module 'material-ui/svg-icons/action/payment' {
    export import ActionPayment = __MaterialUi.SvgIcon;
    export default ActionPayment;
}

declare module 'material-ui/svg-icons/action/perm-camera-mic' {
    export import ActionPermCameraMic = __MaterialUi.SvgIcon;
    export default ActionPermCameraMic;
}

declare module 'material-ui/svg-icons/action/perm-contact-calendar' {
    export import ActionPermContactCalendar = __MaterialUi.SvgIcon;
    export default ActionPermContactCalendar;
}

declare module 'material-ui/svg-icons/action/perm-data-setting' {
    export import ActionPermDataSetting = __MaterialUi.SvgIcon;
    export default ActionPermDataSetting;
}

declare module 'material-ui/svg-icons/action/perm-device-information' {
    export import ActionPermDeviceInformation = __MaterialUi.SvgIcon;
    export default ActionPermDeviceInformation;
}

declare module 'material-ui/svg-icons/action/perm-identity' {
    export import ActionPermIdentity = __MaterialUi.SvgIcon;
    export default ActionPermIdentity;
}

declare module 'material-ui/svg-icons/action/perm-media' {
    export import ActionPermMedia = __MaterialUi.SvgIcon;
    export default ActionPermMedia;
}

declare module 'material-ui/svg-icons/action/perm-phone-msg' {
    export import ActionPermPhoneMsg = __MaterialUi.SvgIcon;
    export default ActionPermPhoneMsg;
}

declare module 'material-ui/svg-icons/action/perm-scan-wifi' {
    export import ActionPermScanWifi = __MaterialUi.SvgIcon;
    export default ActionPermScanWifi;
}

declare module 'material-ui/svg-icons/action/pets' {
    export import ActionPets = __MaterialUi.SvgIcon;
    export default ActionPets;
}

declare module 'material-ui/svg-icons/action/picture-in-picture' {
    export import ActionPictureInPicture = __MaterialUi.SvgIcon;
    export default ActionPictureInPicture;
}

declare module 'material-ui/svg-icons/action/picture-in-picture-alt' {
    export import ActionPictureInPictureAlt = __MaterialUi.SvgIcon;
    export default ActionPictureInPictureAlt;
}

declare module 'material-ui/svg-icons/action/play-for-work' {
    export import ActionPlayForWork = __MaterialUi.SvgIcon;
    export default ActionPlayForWork;
}

declare module 'material-ui/svg-icons/action/polymer' {
    export import ActionPolymer = __MaterialUi.SvgIcon;
    export default ActionPolymer;
}

declare module 'material-ui/svg-icons/action/power-settings-new' {
    export import ActionPowerSettingsNew = __MaterialUi.SvgIcon;
    export default ActionPowerSettingsNew;
}

declare module 'material-ui/svg-icons/action/pregnant-woman' {
    export import ActionPregnantWoman = __MaterialUi.SvgIcon;
    export default ActionPregnantWoman;
}

declare module 'material-ui/svg-icons/action/print' {
    export import ActionPrint = __MaterialUi.SvgIcon;
    export default ActionPrint;
}

declare module 'material-ui/svg-icons/action/query-builder' {
    export import ActionQueryBuilder = __MaterialUi.SvgIcon;
    export default ActionQueryBuilder;
}

declare module 'material-ui/svg-icons/action/question-answer' {
    export import ActionQuestionAnswer = __MaterialUi.SvgIcon;
    export default ActionQuestionAnswer;
}

declare module 'material-ui/svg-icons/action/receipt' {
    export import ActionReceipt = __MaterialUi.SvgIcon;
    export default ActionReceipt;
}

declare module 'material-ui/svg-icons/action/record-voice-over' {
    export import ActionRecordVoiceOver = __MaterialUi.SvgIcon;
    export default ActionRecordVoiceOver;
}

declare module 'material-ui/svg-icons/action/redeem' {
    export import ActionRedeem = __MaterialUi.SvgIcon;
    export default ActionRedeem;
}

declare module 'material-ui/svg-icons/action/remove-shopping-cart' {
    export import ActionRemoveShoppingCart = __MaterialUi.SvgIcon;
    export default ActionRemoveShoppingCart;
}

declare module 'material-ui/svg-icons/action/reorder' {
    export import ActionReorder = __MaterialUi.SvgIcon;
    export default ActionReorder;
}

declare module 'material-ui/svg-icons/action/report-problem' {
    export import ActionReportProblem = __MaterialUi.SvgIcon;
    export default ActionReportProblem;
}

declare module 'material-ui/svg-icons/action/restore' {
    export import ActionRestore = __MaterialUi.SvgIcon;
    export default ActionRestore;
}

declare module 'material-ui/svg-icons/action/restore-page' {
    export import ActionRestorePage = __MaterialUi.SvgIcon;
    export default ActionRestorePage;
}

declare module 'material-ui/svg-icons/action/room' {
    export import ActionRoom = __MaterialUi.SvgIcon;
    export default ActionRoom;
}

declare module 'material-ui/svg-icons/action/rounded-corner' {
    export import ActionRoundedCorner = __MaterialUi.SvgIcon;
    export default ActionRoundedCorner;
}

declare module 'material-ui/svg-icons/action/rowing' {
    export import ActionRowing = __MaterialUi.SvgIcon;
    export default ActionRowing;
}

declare module 'material-ui/svg-icons/action/schedule' {
    export import ActionSchedule = __MaterialUi.SvgIcon;
    export default ActionSchedule;
}

declare module 'material-ui/svg-icons/action/search' {
    export import ActionSearch = __MaterialUi.SvgIcon;
    export default ActionSearch;
}

declare module 'material-ui/svg-icons/action/settings' {
    export import ActionSettings = __MaterialUi.SvgIcon;
    export default ActionSettings;
}

declare module 'material-ui/svg-icons/action/settings-applications' {
    export import ActionSettingsApplications = __MaterialUi.SvgIcon;
    export default ActionSettingsApplications;
}

declare module 'material-ui/svg-icons/action/settings-backup-restore' {
    export import ActionSettingsBackupRestore = __MaterialUi.SvgIcon;
    export default ActionSettingsBackupRestore;
}

declare module 'material-ui/svg-icons/action/settings-bluetooth' {
    export import ActionSettingsBluetooth = __MaterialUi.SvgIcon;
    export default ActionSettingsBluetooth;
}

declare module 'material-ui/svg-icons/action/settings-brightness' {
    export import ActionSettingsBrightness = __MaterialUi.SvgIcon;
    export default ActionSettingsBrightness;
}

declare module 'material-ui/svg-icons/action/settings-cell' {
    export import ActionSettingsCell = __MaterialUi.SvgIcon;
    export default ActionSettingsCell;
}

declare module 'material-ui/svg-icons/action/settings-ethernet' {
    export import ActionSettingsEthernet = __MaterialUi.SvgIcon;
    export default ActionSettingsEthernet;
}

declare module 'material-ui/svg-icons/action/settings-input-antenna' {
    export import ActionSettingsInputAntenna = __MaterialUi.SvgIcon;
    export default ActionSettingsInputAntenna;
}

declare module 'material-ui/svg-icons/action/settings-input-component' {
    export import ActionSettingsInputComponent = __MaterialUi.SvgIcon;
    export default ActionSettingsInputComponent;
}

declare module 'material-ui/svg-icons/action/settings-input-composite' {
    export import ActionSettingsInputComposite = __MaterialUi.SvgIcon;
    export default ActionSettingsInputComposite;
}

declare module 'material-ui/svg-icons/action/settings-input-hdmi' {
    export import ActionSettingsInputHdmi = __MaterialUi.SvgIcon;
    export default ActionSettingsInputHdmi;
}

declare module 'material-ui/svg-icons/action/settings-input-svideo' {
    export import ActionSettingsInputSvideo = __MaterialUi.SvgIcon;
    export default ActionSettingsInputSvideo;
}

declare module 'material-ui/svg-icons/action/settings-overscan' {
    export import ActionSettingsOverscan = __MaterialUi.SvgIcon;
    export default ActionSettingsOverscan;
}

declare module 'material-ui/svg-icons/action/settings-phone' {
    export import ActionSettingsPhone = __MaterialUi.SvgIcon;
    export default ActionSettingsPhone;
}

declare module 'material-ui/svg-icons/action/settings-power' {
    export import ActionSettingsPower = __MaterialUi.SvgIcon;
    export default ActionSettingsPower;
}

declare module 'material-ui/svg-icons/action/settings-remote' {
    export import ActionSettingsRemote = __MaterialUi.SvgIcon;
    export default ActionSettingsRemote;
}

declare module 'material-ui/svg-icons/action/settings-voice' {
    export import ActionSettingsVoice = __MaterialUi.SvgIcon;
    export default ActionSettingsVoice;
}

declare module 'material-ui/svg-icons/action/shop' {
    export import ActionShop = __MaterialUi.SvgIcon;
    export default ActionShop;
}

declare module 'material-ui/svg-icons/action/shop-two' {
    export import ActionShopTwo = __MaterialUi.SvgIcon;
    export default ActionShopTwo;
}

declare module 'material-ui/svg-icons/action/shopping-basket' {
    export import ActionShoppingBasket = __MaterialUi.SvgIcon;
    export default ActionShoppingBasket;
}

declare module 'material-ui/svg-icons/action/shopping-cart' {
    export import ActionShoppingCart = __MaterialUi.SvgIcon;
    export default ActionShoppingCart;
}

declare module 'material-ui/svg-icons/action/speaker-notes' {
    export import ActionSpeakerNotes = __MaterialUi.SvgIcon;
    export default ActionSpeakerNotes;
}

declare module 'material-ui/svg-icons/action/speaker-notes-off' {
    export import ActionSpeakerNotesOff = __MaterialUi.SvgIcon;
    export default ActionSpeakerNotesOff;
}

declare module 'material-ui/svg-icons/action/spellcheck' {
    export import ActionSpellcheck = __MaterialUi.SvgIcon;
    export default ActionSpellcheck;
}

declare module 'material-ui/svg-icons/action/stars' {
    export import ActionStars = __MaterialUi.SvgIcon;
    export default ActionStars;
}

declare module 'material-ui/svg-icons/action/store' {
    export import ActionStore = __MaterialUi.SvgIcon;
    export default ActionStore;
}

declare module 'material-ui/svg-icons/action/subject' {
    export import ActionSubject = __MaterialUi.SvgIcon;
    export default ActionSubject;
}

declare module 'material-ui/svg-icons/action/supervisor-account' {
    export import ActionSupervisorAccount = __MaterialUi.SvgIcon;
    export default ActionSupervisorAccount;
}

declare module 'material-ui/svg-icons/action/swap-horiz' {
    export import ActionSwapHoriz = __MaterialUi.SvgIcon;
    export default ActionSwapHoriz;
}

declare module 'material-ui/svg-icons/action/swap-vert' {
    export import ActionSwapVert = __MaterialUi.SvgIcon;
    export default ActionSwapVert;
}

declare module 'material-ui/svg-icons/action/swap-vertical-circle' {
    export import ActionSwapVerticalCircle = __MaterialUi.SvgIcon;
    export default ActionSwapVerticalCircle;
}

declare module 'material-ui/svg-icons/action/system-update-alt' {
    export import ActionSystemUpdateAlt = __MaterialUi.SvgIcon;
    export default ActionSystemUpdateAlt;
}

declare module 'material-ui/svg-icons/action/tab' {
    export import ActionTab = __MaterialUi.SvgIcon;
    export default ActionTab;
}

declare module 'material-ui/svg-icons/action/tab-unselected' {
    export import ActionTabUnselected = __MaterialUi.SvgIcon;
    export default ActionTabUnselected;
}

declare module 'material-ui/svg-icons/action/theaters' {
    export import ActionTheaters = __MaterialUi.SvgIcon;
    export default ActionTheaters;
}

declare module 'material-ui/svg-icons/action/three-d-rotation' {
    export import ActionThreeDRotation = __MaterialUi.SvgIcon;
    export default ActionThreeDRotation;
}

declare module 'material-ui/svg-icons/action/thumb-down' {
    export import ActionThumbDown = __MaterialUi.SvgIcon;
    export default ActionThumbDown;
}

declare module 'material-ui/svg-icons/action/thumb-up' {
    export import ActionThumbUp = __MaterialUi.SvgIcon;
    export default ActionThumbUp;
}

declare module 'material-ui/svg-icons/action/thumbs-up-down' {
    export import ActionThumbsUpDown = __MaterialUi.SvgIcon;
    export default ActionThumbsUpDown;
}

declare module 'material-ui/svg-icons/action/timeline' {
    export import ActionTimeline = __MaterialUi.SvgIcon;
    export default ActionTimeline;
}

declare module 'material-ui/svg-icons/action/toc' {
    export import ActionToc = __MaterialUi.SvgIcon;
    export default ActionToc;
}

declare module 'material-ui/svg-icons/action/today' {
    export import ActionToday = __MaterialUi.SvgIcon;
    export default ActionToday;
}

declare module 'material-ui/svg-icons/action/toll' {
    export import ActionToll = __MaterialUi.SvgIcon;
    export default ActionToll;
}

declare module 'material-ui/svg-icons/action/touch-app' {
    export import ActionTouchApp = __MaterialUi.SvgIcon;
    export default ActionTouchApp;
}

declare module 'material-ui/svg-icons/action/track-changes' {
    export import ActionTrackChanges = __MaterialUi.SvgIcon;
    export default ActionTrackChanges;
}

declare module 'material-ui/svg-icons/action/translate' {
    export import ActionTranslate = __MaterialUi.SvgIcon;
    export default ActionTranslate;
}

declare module 'material-ui/svg-icons/action/trending-down' {
    export import ActionTrendingDown = __MaterialUi.SvgIcon;
    export default ActionTrendingDown;
}

declare module 'material-ui/svg-icons/action/trending-flat' {
    export import ActionTrendingFlat = __MaterialUi.SvgIcon;
    export default ActionTrendingFlat;
}

declare module 'material-ui/svg-icons/action/trending-up' {
    export import ActionTrendingUp = __MaterialUi.SvgIcon;
    export default ActionTrendingUp;
}

declare module 'material-ui/svg-icons/action/turned-in' {
    export import ActionTurnedIn = __MaterialUi.SvgIcon;
    export default ActionTurnedIn;
}

declare module 'material-ui/svg-icons/action/turned-in-not' {
    export import ActionTurnedInNot = __MaterialUi.SvgIcon;
    export default ActionTurnedInNot;
}

declare module 'material-ui/svg-icons/action/update' {
    export import ActionUpdate = __MaterialUi.SvgIcon;
    export default ActionUpdate;
}

declare module 'material-ui/svg-icons/action/verified-user' {
    export import ActionVerifiedUser = __MaterialUi.SvgIcon;
    export default ActionVerifiedUser;
}

declare module 'material-ui/svg-icons/action/view-agenda' {
    export import ActionViewAgenda = __MaterialUi.SvgIcon;
    export default ActionViewAgenda;
}

declare module 'material-ui/svg-icons/action/view-array' {
    export import ActionViewArray = __MaterialUi.SvgIcon;
    export default ActionViewArray;
}

declare module 'material-ui/svg-icons/action/view-carousel' {
    export import ActionViewCarousel = __MaterialUi.SvgIcon;
    export default ActionViewCarousel;
}

declare module 'material-ui/svg-icons/action/view-column' {
    export import ActionViewColumn = __MaterialUi.SvgIcon;
    export default ActionViewColumn;
}

declare module 'material-ui/svg-icons/action/view-day' {
    export import ActionViewDay = __MaterialUi.SvgIcon;
    export default ActionViewDay;
}

declare module 'material-ui/svg-icons/action/view-headline' {
    export import ActionViewHeadline = __MaterialUi.SvgIcon;
    export default ActionViewHeadline;
}

declare module 'material-ui/svg-icons/action/view-list' {
    export import ActionViewList = __MaterialUi.SvgIcon;
    export default ActionViewList;
}

declare module 'material-ui/svg-icons/action/view-module' {
    export import ActionViewModule = __MaterialUi.SvgIcon;
    export default ActionViewModule;
}

declare module 'material-ui/svg-icons/action/view-quilt' {
    export import ActionViewQuilt = __MaterialUi.SvgIcon;
    export default ActionViewQuilt;
}

declare module 'material-ui/svg-icons/action/view-stream' {
    export import ActionViewStream = __MaterialUi.SvgIcon;
    export default ActionViewStream;
}

declare module 'material-ui/svg-icons/action/view-week' {
    export import ActionViewWeek = __MaterialUi.SvgIcon;
    export default ActionViewWeek;
}

declare module 'material-ui/svg-icons/action/visibility' {
    export import ActionVisibility = __MaterialUi.SvgIcon;
    export default ActionVisibility;
}

declare module 'material-ui/svg-icons/action/visibility-off' {
    export import ActionVisibilityOff = __MaterialUi.SvgIcon;
    export default ActionVisibilityOff;
}

declare module 'material-ui/svg-icons/action/watch-later' {
    export import ActionWatchLater = __MaterialUi.SvgIcon;
    export default ActionWatchLater;
}

declare module 'material-ui/svg-icons/action/work' {
    export import ActionWork = __MaterialUi.SvgIcon;
    export default ActionWork;
}

declare module 'material-ui/svg-icons/action/youtube-searched-for' {
    export import ActionYoutubeSearchedFor = __MaterialUi.SvgIcon;
    export default ActionYoutubeSearchedFor;
}

declare module 'material-ui/svg-icons/action/zoom-in' {
    export import ActionZoomIn = __MaterialUi.SvgIcon;
    export default ActionZoomIn;
}

declare module 'material-ui/svg-icons/action/zoom-out' {
    export import ActionZoomOut = __MaterialUi.SvgIcon;
    export default ActionZoomOut;
}

declare module 'material-ui/svg-icons/alert/add-alert' {
    export import AlertAddAlert = __MaterialUi.SvgIcon;
    export default AlertAddAlert;
}

declare module 'material-ui/svg-icons/alert/error' {
    export import AlertError = __MaterialUi.SvgIcon;
    export default AlertError;
}

declare module 'material-ui/svg-icons/alert/error-outline' {
    export import AlertErrorOutline = __MaterialUi.SvgIcon;
    export default AlertErrorOutline;
}

declare module 'material-ui/svg-icons/alert/warning' {
    export import AlertWarning = __MaterialUi.SvgIcon;
    export default AlertWarning;
}

declare module 'material-ui/svg-icons/av/add-to-queue' {
    export import AvAddToQueue = __MaterialUi.SvgIcon;
    export default AvAddToQueue;
}

declare module 'material-ui/svg-icons/av/airplay' {
    export import AvAirplay = __MaterialUi.SvgIcon;
    export default AvAirplay;
}

declare module 'material-ui/svg-icons/av/album' {
    export import AvAlbum = __MaterialUi.SvgIcon;
    export default AvAlbum;
}

declare module 'material-ui/svg-icons/av/art-track' {
    export import AvArtTrack = __MaterialUi.SvgIcon;
    export default AvArtTrack;
}

declare module 'material-ui/svg-icons/av/av-timer' {
    export import AvAvTimer = __MaterialUi.SvgIcon;
    export default AvAvTimer;
}

declare module 'material-ui/svg-icons/av/branding-watermark' {
    export import AvBrandingWatermark = __MaterialUi.SvgIcon;
    export default AvBrandingWatermark;
}

declare module 'material-ui/svg-icons/av/call-to-action' {
    export import AvCallToAction = __MaterialUi.SvgIcon;
    export default AvCallToAction;
}

declare module 'material-ui/svg-icons/av/closed-caption' {
    export import AvClosedCaption = __MaterialUi.SvgIcon;
    export default AvClosedCaption;
}

declare module 'material-ui/svg-icons/av/equalizer' {
    export import AvEqualizer = __MaterialUi.SvgIcon;
    export default AvEqualizer;
}

declare module 'material-ui/svg-icons/av/explicit' {
    export import AvExplicit = __MaterialUi.SvgIcon;
    export default AvExplicit;
}

declare module 'material-ui/svg-icons/av/fast-forward' {
    export import AvFastForward = __MaterialUi.SvgIcon;
    export default AvFastForward;
}

declare module 'material-ui/svg-icons/av/fast-rewind' {
    export import AvFastRewind = __MaterialUi.SvgIcon;
    export default AvFastRewind;
}

declare module 'material-ui/svg-icons/av/featured-play-list' {
    export import AvFeaturedPlayList = __MaterialUi.SvgIcon;
    export default AvFeaturedPlayList;
}

declare module 'material-ui/svg-icons/av/featured-video' {
    export import AvFeaturedVideo = __MaterialUi.SvgIcon;
    export default AvFeaturedVideo;
}

declare module 'material-ui/svg-icons/av/fiber-dvr' {
    export import AvFiberDvr = __MaterialUi.SvgIcon;
    export default AvFiberDvr;
}

declare module 'material-ui/svg-icons/av/fiber-manual-record' {
    export import AvFiberManualRecord = __MaterialUi.SvgIcon;
    export default AvFiberManualRecord;
}

declare module 'material-ui/svg-icons/av/fiber-new' {
    export import AvFiberNew = __MaterialUi.SvgIcon;
    export default AvFiberNew;
}

declare module 'material-ui/svg-icons/av/fiber-pin' {
    export import AvFiberPin = __MaterialUi.SvgIcon;
    export default AvFiberPin;
}

declare module 'material-ui/svg-icons/av/fiber-smart-record' {
    export import AvFiberSmartRecord = __MaterialUi.SvgIcon;
    export default AvFiberSmartRecord;
}

declare module 'material-ui/svg-icons/av/forward-10' {
    export import AvForward10 = __MaterialUi.SvgIcon;
    export default AvForward10;
}

declare module 'material-ui/svg-icons/av/forward-30' {
    export import AvForward30 = __MaterialUi.SvgIcon;
    export default AvForward30;
}

declare module 'material-ui/svg-icons/av/forward-5' {
    export import AvForward5 = __MaterialUi.SvgIcon;
    export default AvForward5;
}

declare module 'material-ui/svg-icons/av/games' {
    export import AvGames = __MaterialUi.SvgIcon;
    export default AvGames;
}

declare module 'material-ui/svg-icons/av/hd' {
    export import AvHd = __MaterialUi.SvgIcon;
    export default AvHd;
}

declare module 'material-ui/svg-icons/av/hearing' {
    export import AvHearing = __MaterialUi.SvgIcon;
    export default AvHearing;
}

declare module 'material-ui/svg-icons/av/high-quality' {
    export import AvHighQuality = __MaterialUi.SvgIcon;
    export default AvHighQuality;
}

declare module 'material-ui/svg-icons/av/library-add' {
    export import AvLibraryAdd = __MaterialUi.SvgIcon;
    export default AvLibraryAdd;
}

declare module 'material-ui/svg-icons/av/library-books' {
    export import AvLibraryBooks = __MaterialUi.SvgIcon;
    export default AvLibraryBooks;
}

declare module 'material-ui/svg-icons/av/library-music' {
    export import AvLibraryMusic = __MaterialUi.SvgIcon;
    export default AvLibraryMusic;
}

declare module 'material-ui/svg-icons/av/loop' {
    export import AvLoop = __MaterialUi.SvgIcon;
    export default AvLoop;
}

declare module 'material-ui/svg-icons/av/mic' {
    export import AvMic = __MaterialUi.SvgIcon;
    export default AvMic;
}

declare module 'material-ui/svg-icons/av/mic-none' {
    export import AvMicNone = __MaterialUi.SvgIcon;
    export default AvMicNone;
}

declare module 'material-ui/svg-icons/av/mic-off' {
    export import AvMicOff = __MaterialUi.SvgIcon;
    export default AvMicOff;
}

declare module 'material-ui/svg-icons/av/movie' {
    export import AvMovie = __MaterialUi.SvgIcon;
    export default AvMovie;
}

declare module 'material-ui/svg-icons/av/music-video' {
    export import AvMusicVideo = __MaterialUi.SvgIcon;
    export default AvMusicVideo;
}

declare module 'material-ui/svg-icons/av/new-releases' {
    export import AvNewReleases = __MaterialUi.SvgIcon;
    export default AvNewReleases;
}

declare module 'material-ui/svg-icons/av/not-interested' {
    export import AvNotInterested = __MaterialUi.SvgIcon;
    export default AvNotInterested;
}

declare module 'material-ui/svg-icons/av/note' {
    export import AvNote = __MaterialUi.SvgIcon;
    export default AvNote;
}

declare module 'material-ui/svg-icons/av/pause' {
    export import AvPause = __MaterialUi.SvgIcon;
    export default AvPause;
}

declare module 'material-ui/svg-icons/av/pause-circle-filled' {
    export import AvPauseCircleFilled = __MaterialUi.SvgIcon;
    export default AvPauseCircleFilled;
}

declare module 'material-ui/svg-icons/av/pause-circle-outline' {
    export import AvPauseCircleOutline = __MaterialUi.SvgIcon;
    export default AvPauseCircleOutline;
}

declare module 'material-ui/svg-icons/av/play-arrow' {
    export import AvPlayArrow = __MaterialUi.SvgIcon;
    export default AvPlayArrow;
}

declare module 'material-ui/svg-icons/av/play-circle-filled' {
    export import AvPlayCircleFilled = __MaterialUi.SvgIcon;
    export default AvPlayCircleFilled;
}

declare module 'material-ui/svg-icons/av/play-circle-outline' {
    export import AvPlayCircleOutline = __MaterialUi.SvgIcon;
    export default AvPlayCircleOutline;
}

declare module 'material-ui/svg-icons/av/playlist-add' {
    export import AvPlaylistAdd = __MaterialUi.SvgIcon;
    export default AvPlaylistAdd;
}

declare module 'material-ui/svg-icons/av/playlist-add-check' {
    export import AvPlaylistAddCheck = __MaterialUi.SvgIcon;
    export default AvPlaylistAddCheck;
}

declare module 'material-ui/svg-icons/av/playlist-play' {
    export import AvPlaylistPlay = __MaterialUi.SvgIcon;
    export default AvPlaylistPlay;
}

declare module 'material-ui/svg-icons/av/queue' {
    export import AvQueue = __MaterialUi.SvgIcon;
    export default AvQueue;
}

declare module 'material-ui/svg-icons/av/queue-music' {
    export import AvQueueMusic = __MaterialUi.SvgIcon;
    export default AvQueueMusic;
}

declare module 'material-ui/svg-icons/av/queue-play-next' {
    export import AvQueuePlayNext = __MaterialUi.SvgIcon;
    export default AvQueuePlayNext;
}

declare module 'material-ui/svg-icons/av/radio' {
    export import AvRadio = __MaterialUi.SvgIcon;
    export default AvRadio;
}

declare module 'material-ui/svg-icons/av/recent-actors' {
    export import AvRecentActors = __MaterialUi.SvgIcon;
    export default AvRecentActors;
}

declare module 'material-ui/svg-icons/av/remove-from-queue' {
    export import AvRemoveFromQueue = __MaterialUi.SvgIcon;
    export default AvRemoveFromQueue;
}

declare module 'material-ui/svg-icons/av/repeat' {
    export import AvRepeat = __MaterialUi.SvgIcon;
    export default AvRepeat;
}

declare module 'material-ui/svg-icons/av/repeat-one' {
    export import AvRepeatOne = __MaterialUi.SvgIcon;
    export default AvRepeatOne;
}

declare module 'material-ui/svg-icons/av/replay' {
    export import AvReplay = __MaterialUi.SvgIcon;
    export default AvReplay;
}

declare module 'material-ui/svg-icons/av/replay-10' {
    export import AvReplay10 = __MaterialUi.SvgIcon;
    export default AvReplay10;
}

declare module 'material-ui/svg-icons/av/replay-30' {
    export import AvReplay30 = __MaterialUi.SvgIcon;
    export default AvReplay30;
}

declare module 'material-ui/svg-icons/av/replay-5' {
    export import AvReplay5 = __MaterialUi.SvgIcon;
    export default AvReplay5;
}

declare module 'material-ui/svg-icons/av/shuffle' {
    export import AvShuffle = __MaterialUi.SvgIcon;
    export default AvShuffle;
}

declare module 'material-ui/svg-icons/av/skip-next' {
    export import AvSkipNext = __MaterialUi.SvgIcon;
    export default AvSkipNext;
}

declare module 'material-ui/svg-icons/av/skip-previous' {
    export import AvSkipPrevious = __MaterialUi.SvgIcon;
    export default AvSkipPrevious;
}

declare module 'material-ui/svg-icons/av/slow-motion-video' {
    export import AvSlowMotionVideo = __MaterialUi.SvgIcon;
    export default AvSlowMotionVideo;
}

declare module 'material-ui/svg-icons/av/snooze' {
    export import AvSnooze = __MaterialUi.SvgIcon;
    export default AvSnooze;
}

declare module 'material-ui/svg-icons/av/sort-by-alpha' {
    export import AvSortByAlpha = __MaterialUi.SvgIcon;
    export default AvSortByAlpha;
}

declare module 'material-ui/svg-icons/av/stop' {
    export import AvStop = __MaterialUi.SvgIcon;
    export default AvStop;
}

declare module 'material-ui/svg-icons/av/subscriptions' {
    export import AvSubscriptions = __MaterialUi.SvgIcon;
    export default AvSubscriptions;
}

declare module 'material-ui/svg-icons/av/subtitles' {
    export import AvSubtitles = __MaterialUi.SvgIcon;
    export default AvSubtitles;
}

declare module 'material-ui/svg-icons/av/surround-sound' {
    export import AvSurroundSound = __MaterialUi.SvgIcon;
    export default AvSurroundSound;
}

declare module 'material-ui/svg-icons/av/video-call' {
    export import AvVideoCall = __MaterialUi.SvgIcon;
    export default AvVideoCall;
}

declare module 'material-ui/svg-icons/av/video-label' {
    export import AvVideoLabel = __MaterialUi.SvgIcon;
    export default AvVideoLabel;
}

declare module 'material-ui/svg-icons/av/video-library' {
    export import AvVideoLibrary = __MaterialUi.SvgIcon;
    export default AvVideoLibrary;
}

declare module 'material-ui/svg-icons/av/videocam' {
    export import AvVideocam = __MaterialUi.SvgIcon;
    export default AvVideocam;
}

declare module 'material-ui/svg-icons/av/videocam-off' {
    export import AvVideocamOff = __MaterialUi.SvgIcon;
    export default AvVideocamOff;
}

declare module 'material-ui/svg-icons/av/volume-down' {
    export import AvVolumeDown = __MaterialUi.SvgIcon;
    export default AvVolumeDown;
}

declare module 'material-ui/svg-icons/av/volume-mute' {
    export import AvVolumeMute = __MaterialUi.SvgIcon;
    export default AvVolumeMute;
}

declare module 'material-ui/svg-icons/av/volume-off' {
    export import AvVolumeOff = __MaterialUi.SvgIcon;
    export default AvVolumeOff;
}

declare module 'material-ui/svg-icons/av/volume-up' {
    export import AvVolumeUp = __MaterialUi.SvgIcon;
    export default AvVolumeUp;
}

declare module 'material-ui/svg-icons/av/web' {
    export import AvWeb = __MaterialUi.SvgIcon;
    export default AvWeb;
}

declare module 'material-ui/svg-icons/av/web-asset' {
    export import AvWebAsset = __MaterialUi.SvgIcon;
    export default AvWebAsset;
}

declare module 'material-ui/svg-icons/communication/business' {
    export import CommunicationBusiness = __MaterialUi.SvgIcon;
    export default CommunicationBusiness;
}

declare module 'material-ui/svg-icons/communication/call' {
    export import CommunicationCall = __MaterialUi.SvgIcon;
    export default CommunicationCall;
}

declare module 'material-ui/svg-icons/communication/call-end' {
    export import CommunicationCallEnd = __MaterialUi.SvgIcon;
    export default CommunicationCallEnd;
}

declare module 'material-ui/svg-icons/communication/call-made' {
    export import CommunicationCallMade = __MaterialUi.SvgIcon;
    export default CommunicationCallMade;
}

declare module 'material-ui/svg-icons/communication/call-merge' {
    export import CommunicationCallMerge = __MaterialUi.SvgIcon;
    export default CommunicationCallMerge;
}

declare module 'material-ui/svg-icons/communication/call-missed' {
    export import CommunicationCallMissed = __MaterialUi.SvgIcon;
    export default CommunicationCallMissed;
}

declare module 'material-ui/svg-icons/communication/call-missed-outgoing' {
    export import CommunicationCallMissedOutgoing = __MaterialUi.SvgIcon;
    export default CommunicationCallMissedOutgoing;
}

declare module 'material-ui/svg-icons/communication/call-received' {
    export import CommunicationCallReceived = __MaterialUi.SvgIcon;
    export default CommunicationCallReceived;
}

declare module 'material-ui/svg-icons/communication/call-split' {
    export import CommunicationCallSplit = __MaterialUi.SvgIcon;
    export default CommunicationCallSplit;
}

declare module 'material-ui/svg-icons/communication/chat' {
    export import CommunicationChat = __MaterialUi.SvgIcon;
    export default CommunicationChat;
}

declare module 'material-ui/svg-icons/communication/chat-bubble' {
    export import CommunicationChatBubble = __MaterialUi.SvgIcon;
    export default CommunicationChatBubble;
}

declare module 'material-ui/svg-icons/communication/chat-bubble-outline' {
    export import CommunicationChatBubbleOutline = __MaterialUi.SvgIcon;
    export default CommunicationChatBubbleOutline;
}

declare module 'material-ui/svg-icons/communication/clear-all' {
    export import CommunicationClearAll = __MaterialUi.SvgIcon;
    export default CommunicationClearAll;
}

declare module 'material-ui/svg-icons/communication/comment' {
    export import CommunicationComment = __MaterialUi.SvgIcon;
    export default CommunicationComment;
}

declare module 'material-ui/svg-icons/communication/contact-mail' {
    export import CommunicationContactMail = __MaterialUi.SvgIcon;
    export default CommunicationContactMail;
}

declare module 'material-ui/svg-icons/communication/contact-phone' {
    export import CommunicationContactPhone = __MaterialUi.SvgIcon;
    export default CommunicationContactPhone;
}

declare module 'material-ui/svg-icons/communication/contacts' {
    export import CommunicationContacts = __MaterialUi.SvgIcon;
    export default CommunicationContacts;
}

declare module 'material-ui/svg-icons/communication/dialer-sip' {
    export import CommunicationDialerSip = __MaterialUi.SvgIcon;
    export default CommunicationDialerSip;
}

declare module 'material-ui/svg-icons/communication/dialpad' {
    export import CommunicationDialpad = __MaterialUi.SvgIcon;
    export default CommunicationDialpad;
}

declare module 'material-ui/svg-icons/communication/email' {
    export import CommunicationEmail = __MaterialUi.SvgIcon;
    export default CommunicationEmail;
}

declare module 'material-ui/svg-icons/communication/forum' {
    export import CommunicationForum = __MaterialUi.SvgIcon;
    export default CommunicationForum;
}

declare module 'material-ui/svg-icons/communication/import-contacts' {
    export import CommunicationImportContacts = __MaterialUi.SvgIcon;
    export default CommunicationImportContacts;
}

declare module 'material-ui/svg-icons/communication/import-export' {
    export import CommunicationImportExport = __MaterialUi.SvgIcon;
    export default CommunicationImportExport;
}

declare module 'material-ui/svg-icons/communication/invert-colors-off' {
    export import CommunicationInvertColorsOff = __MaterialUi.SvgIcon;
    export default CommunicationInvertColorsOff;
}

declare module 'material-ui/svg-icons/communication/live-help' {
    export import CommunicationLiveHelp = __MaterialUi.SvgIcon;
    export default CommunicationLiveHelp;
}

declare module 'material-ui/svg-icons/communication/location-off' {
    export import CommunicationLocationOff = __MaterialUi.SvgIcon;
    export default CommunicationLocationOff;
}

declare module 'material-ui/svg-icons/communication/location-on' {
    export import CommunicationLocationOn = __MaterialUi.SvgIcon;
    export default CommunicationLocationOn;
}

declare module 'material-ui/svg-icons/communication/mail-outline' {
    export import CommunicationMailOutline = __MaterialUi.SvgIcon;
    export default CommunicationMailOutline;
}

declare module 'material-ui/svg-icons/communication/message' {
    export import CommunicationMessage = __MaterialUi.SvgIcon;
    export default CommunicationMessage;
}

declare module 'material-ui/svg-icons/communication/no-sim' {
    export import CommunicationNoSim = __MaterialUi.SvgIcon;
    export default CommunicationNoSim;
}

declare module 'material-ui/svg-icons/communication/phone' {
    export import CommunicationPhone = __MaterialUi.SvgIcon;
    export default CommunicationPhone;
}

declare module 'material-ui/svg-icons/communication/phonelink-erase' {
    export import CommunicationPhonelinkErase = __MaterialUi.SvgIcon;
    export default CommunicationPhonelinkErase;
}

declare module 'material-ui/svg-icons/communication/phonelink-lock' {
    export import CommunicationPhonelinkLock = __MaterialUi.SvgIcon;
    export default CommunicationPhonelinkLock;
}

declare module 'material-ui/svg-icons/communication/phonelink-ring' {
    export import CommunicationPhonelinkRing = __MaterialUi.SvgIcon;
    export default CommunicationPhonelinkRing;
}

declare module 'material-ui/svg-icons/communication/phonelink-setup' {
    export import CommunicationPhonelinkSetup = __MaterialUi.SvgIcon;
    export default CommunicationPhonelinkSetup;
}

declare module 'material-ui/svg-icons/communication/portable-wifi-off' {
    export import CommunicationPortableWifiOff = __MaterialUi.SvgIcon;
    export default CommunicationPortableWifiOff;
}

declare module 'material-ui/svg-icons/communication/present-to-all' {
    export import CommunicationPresentToAll = __MaterialUi.SvgIcon;
    export default CommunicationPresentToAll;
}

declare module 'material-ui/svg-icons/communication/ring-volume' {
    export import CommunicationRingVolume = __MaterialUi.SvgIcon;
    export default CommunicationRingVolume;
}

declare module 'material-ui/svg-icons/communication/rss-feed' {
    export import CommunicationRssFeed = __MaterialUi.SvgIcon;
    export default CommunicationRssFeed;
}

declare module 'material-ui/svg-icons/communication/screen-share' {
    export import CommunicationScreenShare = __MaterialUi.SvgIcon;
    export default CommunicationScreenShare;
}

declare module 'material-ui/svg-icons/communication/speaker-phone' {
    export import CommunicationSpeakerPhone = __MaterialUi.SvgIcon;
    export default CommunicationSpeakerPhone;
}

declare module 'material-ui/svg-icons/communication/stay-current-landscape' {
    export import CommunicationStayCurrentLandscape = __MaterialUi.SvgIcon;
    export default CommunicationStayCurrentLandscape;
}

declare module 'material-ui/svg-icons/communication/stay-current-portrait' {
    export import CommunicationStayCurrentPortrait = __MaterialUi.SvgIcon;
    export default CommunicationStayCurrentPortrait;
}

declare module 'material-ui/svg-icons/communication/stay-primary-landscape' {
    export import CommunicationStayPrimaryLandscape = __MaterialUi.SvgIcon;
    export default CommunicationStayPrimaryLandscape;
}

declare module 'material-ui/svg-icons/communication/stay-primary-portrait' {
    export import CommunicationStayPrimaryPortrait = __MaterialUi.SvgIcon;
    export default CommunicationStayPrimaryPortrait;
}

declare module 'material-ui/svg-icons/communication/stop-screen-share' {
    export import CommunicationStopScreenShare = __MaterialUi.SvgIcon;
    export default CommunicationStopScreenShare;
}

declare module 'material-ui/svg-icons/communication/swap-calls' {
    export import CommunicationSwapCalls = __MaterialUi.SvgIcon;
    export default CommunicationSwapCalls;
}

declare module 'material-ui/svg-icons/communication/textsms' {
    export import CommunicationTextsms = __MaterialUi.SvgIcon;
    export default CommunicationTextsms;
}

declare module 'material-ui/svg-icons/communication/voicemail' {
    export import CommunicationVoicemail = __MaterialUi.SvgIcon;
    export default CommunicationVoicemail;
}

declare module 'material-ui/svg-icons/communication/vpn-key' {
    export import CommunicationVpnKey = __MaterialUi.SvgIcon;
    export default CommunicationVpnKey;
}

declare module 'material-ui/svg-icons/content/add' {
    export import ContentAdd = __MaterialUi.SvgIcon;
    export default ContentAdd;
}

declare module 'material-ui/svg-icons/content/add-box' {
    export import ContentAddBox = __MaterialUi.SvgIcon;
    export default ContentAddBox;
}

declare module 'material-ui/svg-icons/content/add-circle' {
    export import ContentAddCircle = __MaterialUi.SvgIcon;
    export default ContentAddCircle;
}

declare module 'material-ui/svg-icons/content/add-circle-outline' {
    export import ContentAddCircleOutline = __MaterialUi.SvgIcon;
    export default ContentAddCircleOutline;
}

declare module 'material-ui/svg-icons/content/archive' {
    export import ContentArchive = __MaterialUi.SvgIcon;
    export default ContentArchive;
}

declare module 'material-ui/svg-icons/content/backspace' {
    export import ContentBackspace = __MaterialUi.SvgIcon;
    export default ContentBackspace;
}

declare module 'material-ui/svg-icons/content/block' {
    export import ContentBlock = __MaterialUi.SvgIcon;
    export default ContentBlock;
}

declare module 'material-ui/svg-icons/content/clear' {
    export import ContentClear = __MaterialUi.SvgIcon;
    export default ContentClear;
}

declare module 'material-ui/svg-icons/content/content-copy' {
    export import ContentContentCopy = __MaterialUi.SvgIcon;
    export default ContentContentCopy;
}

declare module 'material-ui/svg-icons/content/content-cut' {
    export import ContentContentCut = __MaterialUi.SvgIcon;
    export default ContentContentCut;
}

declare module 'material-ui/svg-icons/content/content-paste' {
    export import ContentContentPaste = __MaterialUi.SvgIcon;
    export default ContentContentPaste;
}

declare module 'material-ui/svg-icons/content/create' {
    export import ContentCreate = __MaterialUi.SvgIcon;
    export default ContentCreate;
}

declare module 'material-ui/svg-icons/content/delete-sweep' {
    export import ContentDeleteSweep = __MaterialUi.SvgIcon;
    export default ContentDeleteSweep;
}

declare module 'material-ui/svg-icons/content/drafts' {
    export import ContentDrafts = __MaterialUi.SvgIcon;
    export default ContentDrafts;
}

declare module 'material-ui/svg-icons/content/filter-list' {
    export import ContentFilterList = __MaterialUi.SvgIcon;
    export default ContentFilterList;
}

declare module 'material-ui/svg-icons/content/flag' {
    export import ContentFlag = __MaterialUi.SvgIcon;
    export default ContentFlag;
}

declare module 'material-ui/svg-icons/content/font-download' {
    export import ContentFontDownload = __MaterialUi.SvgIcon;
    export default ContentFontDownload;
}

declare module 'material-ui/svg-icons/content/forward' {
    export import ContentForward = __MaterialUi.SvgIcon;
    export default ContentForward;
}

declare module 'material-ui/svg-icons/content/gesture' {
    export import ContentGesture = __MaterialUi.SvgIcon;
    export default ContentGesture;
}

declare module 'material-ui/svg-icons/content/inbox' {
    export import ContentInbox = __MaterialUi.SvgIcon;
    export default ContentInbox;
}

declare module 'material-ui/svg-icons/content/link' {
    export import ContentLink = __MaterialUi.SvgIcon;
    export default ContentLink;
}

declare module 'material-ui/svg-icons/content/low-priority' {
    export import ContentLowPriority = __MaterialUi.SvgIcon;
    export default ContentLowPriority;
}

declare module 'material-ui/svg-icons/content/mail' {
    export import ContentMail = __MaterialUi.SvgIcon;
    export default ContentMail;
}

declare module 'material-ui/svg-icons/content/markunread' {
    export import ContentMarkunread = __MaterialUi.SvgIcon;
    export default ContentMarkunread;
}

declare module 'material-ui/svg-icons/content/move-to-inbox' {
    export import ContentMoveToInbox = __MaterialUi.SvgIcon;
    export default ContentMoveToInbox;
}

declare module 'material-ui/svg-icons/content/next-week' {
    export import ContentNextWeek = __MaterialUi.SvgIcon;
    export default ContentNextWeek;
}

declare module 'material-ui/svg-icons/content/redo' {
    export import ContentRedo = __MaterialUi.SvgIcon;
    export default ContentRedo;
}

declare module 'material-ui/svg-icons/content/remove' {
    export import ContentRemove = __MaterialUi.SvgIcon;
    export default ContentRemove;
}

declare module 'material-ui/svg-icons/content/remove-circle' {
    export import ContentRemoveCircle = __MaterialUi.SvgIcon;
    export default ContentRemoveCircle;
}

declare module 'material-ui/svg-icons/content/remove-circle-outline' {
    export import ContentRemoveCircleOutline = __MaterialUi.SvgIcon;
    export default ContentRemoveCircleOutline;
}

declare module 'material-ui/svg-icons/content/reply' {
    export import ContentReply = __MaterialUi.SvgIcon;
    export default ContentReply;
}

declare module 'material-ui/svg-icons/content/reply-all' {
    export import ContentReplyAll = __MaterialUi.SvgIcon;
    export default ContentReplyAll;
}

declare module 'material-ui/svg-icons/content/report' {
    export import ContentReport = __MaterialUi.SvgIcon;
    export default ContentReport;
}

declare module 'material-ui/svg-icons/content/save' {
    export import ContentSave = __MaterialUi.SvgIcon;
    export default ContentSave;
}

declare module 'material-ui/svg-icons/content/select-all' {
    export import ContentSelectAll = __MaterialUi.SvgIcon;
    export default ContentSelectAll;
}

declare module 'material-ui/svg-icons/content/send' {
    export import ContentSend = __MaterialUi.SvgIcon;
    export default ContentSend;
}

declare module 'material-ui/svg-icons/content/sort' {
    export import ContentSort = __MaterialUi.SvgIcon;
    export default ContentSort;
}

declare module 'material-ui/svg-icons/content/text-format' {
    export import ContentTextFormat = __MaterialUi.SvgIcon;
    export default ContentTextFormat;
}

declare module 'material-ui/svg-icons/content/unarchive' {
    export import ContentUnarchive = __MaterialUi.SvgIcon;
    export default ContentUnarchive;
}

declare module 'material-ui/svg-icons/content/undo' {
    export import ContentUndo = __MaterialUi.SvgIcon;
    export default ContentUndo;
}

declare module 'material-ui/svg-icons/content/weekend' {
    export import ContentWeekend = __MaterialUi.SvgIcon;
    export default ContentWeekend;
}

declare module 'material-ui/svg-icons/device/access-alarm' {
    export import DeviceAccessAlarm = __MaterialUi.SvgIcon;
    export default DeviceAccessAlarm;
}

declare module 'material-ui/svg-icons/device/access-alarms' {
    export import DeviceAccessAlarms = __MaterialUi.SvgIcon;
    export default DeviceAccessAlarms;
}

declare module 'material-ui/svg-icons/device/access-time' {
    export import DeviceAccessTime = __MaterialUi.SvgIcon;
    export default DeviceAccessTime;
}

declare module 'material-ui/svg-icons/device/add-alarm' {
    export import DeviceAddAlarm = __MaterialUi.SvgIcon;
    export default DeviceAddAlarm;
}

declare module 'material-ui/svg-icons/device/airplanemode-active' {
    export import DeviceAirplanemodeActive = __MaterialUi.SvgIcon;
    export default DeviceAirplanemodeActive;
}

declare module 'material-ui/svg-icons/device/airplanemode-inactive' {
    export import DeviceAirplanemodeInactive = __MaterialUi.SvgIcon;
    export default DeviceAirplanemodeInactive;
}

declare module 'material-ui/svg-icons/device/battery-20' {
    export import DeviceBattery20 = __MaterialUi.SvgIcon;
    export default DeviceBattery20;
}

declare module 'material-ui/svg-icons/device/battery-30' {
    export import DeviceBattery30 = __MaterialUi.SvgIcon;
    export default DeviceBattery30;
}

declare module 'material-ui/svg-icons/device/battery-50' {
    export import DeviceBattery50 = __MaterialUi.SvgIcon;
    export default DeviceBattery50;
}

declare module 'material-ui/svg-icons/device/battery-60' {
    export import DeviceBattery60 = __MaterialUi.SvgIcon;
    export default DeviceBattery60;
}

declare module 'material-ui/svg-icons/device/battery-80' {
    export import DeviceBattery80 = __MaterialUi.SvgIcon;
    export default DeviceBattery80;
}

declare module 'material-ui/svg-icons/device/battery-90' {
    export import DeviceBattery90 = __MaterialUi.SvgIcon;
    export default DeviceBattery90;
}

declare module 'material-ui/svg-icons/device/battery-alert' {
    export import DeviceBatteryAlert = __MaterialUi.SvgIcon;
    export default DeviceBatteryAlert;
}

declare module 'material-ui/svg-icons/device/battery-charging-20' {
    export import DeviceBatteryCharging20 = __MaterialUi.SvgIcon;
    export default DeviceBatteryCharging20;
}

declare module 'material-ui/svg-icons/device/battery-charging-30' {
    export import DeviceBatteryCharging30 = __MaterialUi.SvgIcon;
    export default DeviceBatteryCharging30;
}

declare module 'material-ui/svg-icons/device/battery-charging-50' {
    export import DeviceBatteryCharging50 = __MaterialUi.SvgIcon;
    export default DeviceBatteryCharging50;
}

declare module 'material-ui/svg-icons/device/battery-charging-60' {
    export import DeviceBatteryCharging60 = __MaterialUi.SvgIcon;
    export default DeviceBatteryCharging60;
}

declare module 'material-ui/svg-icons/device/battery-charging-80' {
    export import DeviceBatteryCharging80 = __MaterialUi.SvgIcon;
    export default DeviceBatteryCharging80;
}

declare module 'material-ui/svg-icons/device/battery-charging-90' {
    export import DeviceBatteryCharging90 = __MaterialUi.SvgIcon;
    export default DeviceBatteryCharging90;
}

declare module 'material-ui/svg-icons/device/battery-charging-full' {
    export import DeviceBatteryChargingFull = __MaterialUi.SvgIcon;
    export default DeviceBatteryChargingFull;
}

declare module 'material-ui/svg-icons/device/battery-full' {
    export import DeviceBatteryFull = __MaterialUi.SvgIcon;
    export default DeviceBatteryFull;
}

declare module 'material-ui/svg-icons/device/battery-std' {
    export import DeviceBatteryStd = __MaterialUi.SvgIcon;
    export default DeviceBatteryStd;
}

declare module 'material-ui/svg-icons/device/battery-unknown' {
    export import DeviceBatteryUnknown = __MaterialUi.SvgIcon;
    export default DeviceBatteryUnknown;
}

declare module 'material-ui/svg-icons/device/bluetooth' {
    export import DeviceBluetooth = __MaterialUi.SvgIcon;
    export default DeviceBluetooth;
}

declare module 'material-ui/svg-icons/device/bluetooth-connected' {
    export import DeviceBluetoothConnected = __MaterialUi.SvgIcon;
    export default DeviceBluetoothConnected;
}

declare module 'material-ui/svg-icons/device/bluetooth-disabled' {
    export import DeviceBluetoothDisabled = __MaterialUi.SvgIcon;
    export default DeviceBluetoothDisabled;
}

declare module 'material-ui/svg-icons/device/bluetooth-searching' {
    export import DeviceBluetoothSearching = __MaterialUi.SvgIcon;
    export default DeviceBluetoothSearching;
}

declare module 'material-ui/svg-icons/device/brightness-auto' {
    export import DeviceBrightnessAuto = __MaterialUi.SvgIcon;
    export default DeviceBrightnessAuto;
}

declare module 'material-ui/svg-icons/device/brightness-high' {
    export import DeviceBrightnessHigh = __MaterialUi.SvgIcon;
    export default DeviceBrightnessHigh;
}

declare module 'material-ui/svg-icons/device/brightness-low' {
    export import DeviceBrightnessLow = __MaterialUi.SvgIcon;
    export default DeviceBrightnessLow;
}

declare module 'material-ui/svg-icons/device/brightness-medium' {
    export import DeviceBrightnessMedium = __MaterialUi.SvgIcon;
    export default DeviceBrightnessMedium;
}

declare module 'material-ui/svg-icons/device/data-usage' {
    export import DeviceDataUsage = __MaterialUi.SvgIcon;
    export default DeviceDataUsage;
}

declare module 'material-ui/svg-icons/device/developer-mode' {
    export import DeviceDeveloperMode = __MaterialUi.SvgIcon;
    export default DeviceDeveloperMode;
}

declare module 'material-ui/svg-icons/device/devices' {
    export import DeviceDevices = __MaterialUi.SvgIcon;
    export default DeviceDevices;
}

declare module 'material-ui/svg-icons/device/dvr' {
    export import DeviceDvr = __MaterialUi.SvgIcon;
    export default DeviceDvr;
}

declare module 'material-ui/svg-icons/device/gps-fixed' {
    export import DeviceGpsFixed = __MaterialUi.SvgIcon;
    export default DeviceGpsFixed;
}

declare module 'material-ui/svg-icons/device/gps-not-fixed' {
    export import DeviceGpsNotFixed = __MaterialUi.SvgIcon;
    export default DeviceGpsNotFixed;
}

declare module 'material-ui/svg-icons/device/gps-off' {
    export import DeviceGpsOff = __MaterialUi.SvgIcon;
    export default DeviceGpsOff;
}

declare module 'material-ui/svg-icons/device/graphic-eq' {
    export import DeviceGraphicEq = __MaterialUi.SvgIcon;
    export default DeviceGraphicEq;
}

declare module 'material-ui/svg-icons/device/location-disabled' {
    export import DeviceLocationDisabled = __MaterialUi.SvgIcon;
    export default DeviceLocationDisabled;
}

declare module 'material-ui/svg-icons/device/location-searching' {
    export import DeviceLocationSearching = __MaterialUi.SvgIcon;
    export default DeviceLocationSearching;
}

declare module 'material-ui/svg-icons/device/network-cell' {
    export import DeviceNetworkCell = __MaterialUi.SvgIcon;
    export default DeviceNetworkCell;
}

declare module 'material-ui/svg-icons/device/network-wifi' {
    export import DeviceNetworkWifi = __MaterialUi.SvgIcon;
    export default DeviceNetworkWifi;
}

declare module 'material-ui/svg-icons/device/nfc' {
    export import DeviceNfc = __MaterialUi.SvgIcon;
    export default DeviceNfc;
}

declare module 'material-ui/svg-icons/device/screen-lock-landscape' {
    export import DeviceScreenLockLandscape = __MaterialUi.SvgIcon;
    export default DeviceScreenLockLandscape;
}

declare module 'material-ui/svg-icons/device/screen-lock-portrait' {
    export import DeviceScreenLockPortrait = __MaterialUi.SvgIcon;
    export default DeviceScreenLockPortrait;
}

declare module 'material-ui/svg-icons/device/screen-lock-rotation' {
    export import DeviceScreenLockRotation = __MaterialUi.SvgIcon;
    export default DeviceScreenLockRotation;
}

declare module 'material-ui/svg-icons/device/screen-rotation' {
    export import DeviceScreenRotation = __MaterialUi.SvgIcon;
    export default DeviceScreenRotation;
}

declare module 'material-ui/svg-icons/device/sd-storage' {
    export import DeviceSdStorage = __MaterialUi.SvgIcon;
    export default DeviceSdStorage;
}

declare module 'material-ui/svg-icons/device/settings-system-daydream' {
    export import DeviceSettingsSystemDaydream = __MaterialUi.SvgIcon;
    export default DeviceSettingsSystemDaydream;
}

declare module 'material-ui/svg-icons/device/signal-cellular-0-bar' {
    export import DeviceSignalCellular0Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalCellular0Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-1-bar' {
    export import DeviceSignalCellular1Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalCellular1Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-2-bar' {
    export import DeviceSignalCellular2Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalCellular2Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-3-bar' {
    export import DeviceSignalCellular3Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalCellular3Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-4-bar' {
    export import DeviceSignalCellular4Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalCellular4Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-0-bar' {
    export import DeviceSignalCellularConnectedNoInternet0Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalCellularConnectedNoInternet0Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-1-bar' {
    export import DeviceSignalCellularConnectedNoInternet1Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalCellularConnectedNoInternet1Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-2-bar' {
    export import DeviceSignalCellularConnectedNoInternet2Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalCellularConnectedNoInternet2Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-3-bar' {
    export import DeviceSignalCellularConnectedNoInternet3Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalCellularConnectedNoInternet3Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-4-bar' {
    export import DeviceSignalCellularConnectedNoInternet4Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalCellularConnectedNoInternet4Bar;
}

declare module 'material-ui/svg-icons/device/signal-cellular-no-sim' {
    export import DeviceSignalCellularNoSim = __MaterialUi.SvgIcon;
    export default DeviceSignalCellularNoSim;
}

declare module 'material-ui/svg-icons/device/signal-cellular-null' {
    export import DeviceSignalCellularNull = __MaterialUi.SvgIcon;
    export default DeviceSignalCellularNull;
}

declare module 'material-ui/svg-icons/device/signal-cellular-off' {
    export import DeviceSignalCellularOff = __MaterialUi.SvgIcon;
    export default DeviceSignalCellularOff;
}

declare module 'material-ui/svg-icons/device/signal-wifi-0-bar' {
    export import DeviceSignalWifi0Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalWifi0Bar;
}

declare module 'material-ui/svg-icons/device/signal-wifi-1-bar' {
    export import DeviceSignalWifi1Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalWifi1Bar;
}

declare module 'material-ui/svg-icons/device/signal-wifi-1-bar-lock' {
    export import DeviceSignalWifi1BarLock = __MaterialUi.SvgIcon;
    export default DeviceSignalWifi1BarLock;
}

declare module 'material-ui/svg-icons/device/signal-wifi-2-bar' {
    export import DeviceSignalWifi2Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalWifi2Bar;
}

declare module 'material-ui/svg-icons/device/signal-wifi-2-bar-lock' {
    export import DeviceSignalWifi2BarLock = __MaterialUi.SvgIcon;
    export default DeviceSignalWifi2BarLock;
}

declare module 'material-ui/svg-icons/device/signal-wifi-3-bar' {
    export import DeviceSignalWifi3Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalWifi3Bar;
}

declare module 'material-ui/svg-icons/device/signal-wifi-3-bar-lock' {
    export import DeviceSignalWifi3BarLock = __MaterialUi.SvgIcon;
    export default DeviceSignalWifi3BarLock;
}

declare module 'material-ui/svg-icons/device/signal-wifi-4-bar' {
    export import DeviceSignalWifi4Bar = __MaterialUi.SvgIcon;
    export default DeviceSignalWifi4Bar;
}

declare module 'material-ui/svg-icons/device/signal-wifi-4-bar-lock' {
    export import DeviceSignalWifi4BarLock = __MaterialUi.SvgIcon;
    export default DeviceSignalWifi4BarLock;
}

declare module 'material-ui/svg-icons/device/signal-wifi-off' {
    export import DeviceSignalWifiOff = __MaterialUi.SvgIcon;
    export default DeviceSignalWifiOff;
}

declare module 'material-ui/svg-icons/device/storage' {
    export import DeviceStorage = __MaterialUi.SvgIcon;
    export default DeviceStorage;
}

declare module 'material-ui/svg-icons/device/usb' {
    export import DeviceUsb = __MaterialUi.SvgIcon;
    export default DeviceUsb;
}

declare module 'material-ui/svg-icons/device/wallpaper' {
    export import DeviceWallpaper = __MaterialUi.SvgIcon;
    export default DeviceWallpaper;
}

declare module 'material-ui/svg-icons/device/widgets' {
    export import DeviceWidgets = __MaterialUi.SvgIcon;
    export default DeviceWidgets;
}

declare module 'material-ui/svg-icons/device/wifi-lock' {
    export import DeviceWifiLock = __MaterialUi.SvgIcon;
    export default DeviceWifiLock;
}

declare module 'material-ui/svg-icons/device/wifi-tethering' {
    export import DeviceWifiTethering = __MaterialUi.SvgIcon;
    export default DeviceWifiTethering;
}

declare module 'material-ui/svg-icons/editor/attach-file' {
    export import EditorAttachFile = __MaterialUi.SvgIcon;
    export default EditorAttachFile;
}

declare module 'material-ui/svg-icons/editor/attach-money' {
    export import EditorAttachMoney = __MaterialUi.SvgIcon;
    export default EditorAttachMoney;
}

declare module 'material-ui/svg-icons/editor/border-all' {
    export import EditorBorderAll = __MaterialUi.SvgIcon;
    export default EditorBorderAll;
}

declare module 'material-ui/svg-icons/editor/border-bottom' {
    export import EditorBorderBottom = __MaterialUi.SvgIcon;
    export default EditorBorderBottom;
}

declare module 'material-ui/svg-icons/editor/border-clear' {
    export import EditorBorderClear = __MaterialUi.SvgIcon;
    export default EditorBorderClear;
}

declare module 'material-ui/svg-icons/editor/border-color' {
    export import EditorBorderColor = __MaterialUi.SvgIcon;
    export default EditorBorderColor;
}

declare module 'material-ui/svg-icons/editor/border-horizontal' {
    export import EditorBorderHorizontal = __MaterialUi.SvgIcon;
    export default EditorBorderHorizontal;
}

declare module 'material-ui/svg-icons/editor/border-inner' {
    export import EditorBorderInner = __MaterialUi.SvgIcon;
    export default EditorBorderInner;
}

declare module 'material-ui/svg-icons/editor/border-left' {
    export import EditorBorderLeft = __MaterialUi.SvgIcon;
    export default EditorBorderLeft;
}

declare module 'material-ui/svg-icons/editor/border-outer' {
    export import EditorBorderOuter = __MaterialUi.SvgIcon;
    export default EditorBorderOuter;
}

declare module 'material-ui/svg-icons/editor/border-right' {
    export import EditorBorderRight = __MaterialUi.SvgIcon;
    export default EditorBorderRight;
}

declare module 'material-ui/svg-icons/editor/border-style' {
    export import EditorBorderStyle = __MaterialUi.SvgIcon;
    export default EditorBorderStyle;
}

declare module 'material-ui/svg-icons/editor/border-top' {
    export import EditorBorderTop = __MaterialUi.SvgIcon;
    export default EditorBorderTop;
}

declare module 'material-ui/svg-icons/editor/border-vertical' {
    export import EditorBorderVertical = __MaterialUi.SvgIcon;
    export default EditorBorderVertical;
}

declare module 'material-ui/svg-icons/editor/bubble-chart' {
    export import EditorBubbleChart = __MaterialUi.SvgIcon;
    export default EditorBubbleChart;
}

declare module 'material-ui/svg-icons/editor/drag-handle' {
    export import EditorDragHandle = __MaterialUi.SvgIcon;
    export default EditorDragHandle;
}

declare module 'material-ui/svg-icons/editor/format-align-center' {
    export import EditorFormatAlignCenter = __MaterialUi.SvgIcon;
    export default EditorFormatAlignCenter;
}

declare module 'material-ui/svg-icons/editor/format-align-justify' {
    export import EditorFormatAlignJustify = __MaterialUi.SvgIcon;
    export default EditorFormatAlignJustify;
}

declare module 'material-ui/svg-icons/editor/format-align-left' {
    export import EditorFormatAlignLeft = __MaterialUi.SvgIcon;
    export default EditorFormatAlignLeft;
}

declare module 'material-ui/svg-icons/editor/format-align-right' {
    export import EditorFormatAlignRight = __MaterialUi.SvgIcon;
    export default EditorFormatAlignRight;
}

declare module 'material-ui/svg-icons/editor/format-bold' {
    export import EditorFormatBold = __MaterialUi.SvgIcon;
    export default EditorFormatBold;
}

declare module 'material-ui/svg-icons/editor/format-clear' {
    export import EditorFormatClear = __MaterialUi.SvgIcon;
    export default EditorFormatClear;
}

declare module 'material-ui/svg-icons/editor/format-color-fill' {
    export import EditorFormatColorFill = __MaterialUi.SvgIcon;
    export default EditorFormatColorFill;
}

declare module 'material-ui/svg-icons/editor/format-color-reset' {
    export import EditorFormatColorReset = __MaterialUi.SvgIcon;
    export default EditorFormatColorReset;
}

declare module 'material-ui/svg-icons/editor/format-color-text' {
    export import EditorFormatColorText = __MaterialUi.SvgIcon;
    export default EditorFormatColorText;
}

declare module 'material-ui/svg-icons/editor/format-indent-decrease' {
    export import EditorFormatIndentDecrease = __MaterialUi.SvgIcon;
    export default EditorFormatIndentDecrease;
}

declare module 'material-ui/svg-icons/editor/format-indent-increase' {
    export import EditorFormatIndentIncrease = __MaterialUi.SvgIcon;
    export default EditorFormatIndentIncrease;
}

declare module 'material-ui/svg-icons/editor/format-italic' {
    export import EditorFormatItalic = __MaterialUi.SvgIcon;
    export default EditorFormatItalic;
}

declare module 'material-ui/svg-icons/editor/format-line-spacing' {
    export import EditorFormatLineSpacing = __MaterialUi.SvgIcon;
    export default EditorFormatLineSpacing;
}

declare module 'material-ui/svg-icons/editor/format-list-bulleted' {
    export import EditorFormatListBulleted = __MaterialUi.SvgIcon;
    export default EditorFormatListBulleted;
}

declare module 'material-ui/svg-icons/editor/format-list-numbered' {
    export import EditorFormatListNumbered = __MaterialUi.SvgIcon;
    export default EditorFormatListNumbered;
}

declare module 'material-ui/svg-icons/editor/format-paint' {
    export import EditorFormatPaint = __MaterialUi.SvgIcon;
    export default EditorFormatPaint;
}

declare module 'material-ui/svg-icons/editor/format-quote' {
    export import EditorFormatQuote = __MaterialUi.SvgIcon;
    export default EditorFormatQuote;
}

declare module 'material-ui/svg-icons/editor/format-shapes' {
    export import EditorFormatShapes = __MaterialUi.SvgIcon;
    export default EditorFormatShapes;
}

declare module 'material-ui/svg-icons/editor/format-size' {
    export import EditorFormatSize = __MaterialUi.SvgIcon;
    export default EditorFormatSize;
}

declare module 'material-ui/svg-icons/editor/format-strikethrough' {
    export import EditorFormatStrikethrough = __MaterialUi.SvgIcon;
    export default EditorFormatStrikethrough;
}

declare module 'material-ui/svg-icons/editor/format-textdirection-l-to-r' {
    export import EditorFormatTextdirectionLToR = __MaterialUi.SvgIcon;
    export default EditorFormatTextdirectionLToR;
}

declare module 'material-ui/svg-icons/editor/format-textdirection-r-to-l' {
    export import EditorFormatTextdirectionRToL = __MaterialUi.SvgIcon;
    export default EditorFormatTextdirectionRToL;
}

declare module 'material-ui/svg-icons/editor/format-underlined' {
    export import EditorFormatUnderlined = __MaterialUi.SvgIcon;
    export default EditorFormatUnderlined;
}

declare module 'material-ui/svg-icons/editor/functions' {
    export import EditorFunctions = __MaterialUi.SvgIcon;
    export default EditorFunctions;
}

declare module 'material-ui/svg-icons/editor/highlight' {
    export import EditorHighlight = __MaterialUi.SvgIcon;
    export default EditorHighlight;
}

declare module 'material-ui/svg-icons/editor/insert-chart' {
    export import EditorInsertChart = __MaterialUi.SvgIcon;
    export default EditorInsertChart;
}

declare module 'material-ui/svg-icons/editor/insert-comment' {
    export import EditorInsertComment = __MaterialUi.SvgIcon;
    export default EditorInsertComment;
}

declare module 'material-ui/svg-icons/editor/insert-drive-file' {
    export import EditorInsertDriveFile = __MaterialUi.SvgIcon;
    export default EditorInsertDriveFile;
}

declare module 'material-ui/svg-icons/editor/insert-emoticon' {
    export import EditorInsertEmoticon = __MaterialUi.SvgIcon;
    export default EditorInsertEmoticon;
}

declare module 'material-ui/svg-icons/editor/insert-invitation' {
    export import EditorInsertInvitation = __MaterialUi.SvgIcon;
    export default EditorInsertInvitation;
}

declare module 'material-ui/svg-icons/editor/insert-link' {
    export import EditorInsertLink = __MaterialUi.SvgIcon;
    export default EditorInsertLink;
}

declare module 'material-ui/svg-icons/editor/insert-photo' {
    export import EditorInsertPhoto = __MaterialUi.SvgIcon;
    export default EditorInsertPhoto;
}

declare module 'material-ui/svg-icons/editor/linear-scale' {
    export import EditorLinearScale = __MaterialUi.SvgIcon;
    export default EditorLinearScale;
}

declare module 'material-ui/svg-icons/editor/merge-type' {
    export import EditorMergeType = __MaterialUi.SvgIcon;
    export default EditorMergeType;
}

declare module 'material-ui/svg-icons/editor/mode-comment' {
    export import EditorModeComment = __MaterialUi.SvgIcon;
    export default EditorModeComment;
}

declare module 'material-ui/svg-icons/editor/mode-edit' {
    export import EditorModeEdit = __MaterialUi.SvgIcon;
    export default EditorModeEdit;
}

declare module 'material-ui/svg-icons/editor/monetization-on' {
    export import EditorMonetizationOn = __MaterialUi.SvgIcon;
    export default EditorMonetizationOn;
}

declare module 'material-ui/svg-icons/editor/money-off' {
    export import EditorMoneyOff = __MaterialUi.SvgIcon;
    export default EditorMoneyOff;
}

declare module 'material-ui/svg-icons/editor/multiline-chart' {
    export import EditorMultilineChart = __MaterialUi.SvgIcon;
    export default EditorMultilineChart;
}

declare module 'material-ui/svg-icons/editor/pie-chart' {
    export import EditorPieChart = __MaterialUi.SvgIcon;
    export default EditorPieChart;
}

declare module 'material-ui/svg-icons/editor/pie-chart-outlined' {
    export import EditorPieChartOutlined = __MaterialUi.SvgIcon;
    export default EditorPieChartOutlined;
}

declare module 'material-ui/svg-icons/editor/publish' {
    export import EditorPublish = __MaterialUi.SvgIcon;
    export default EditorPublish;
}

declare module 'material-ui/svg-icons/editor/short-text' {
    export import EditorShortText = __MaterialUi.SvgIcon;
    export default EditorShortText;
}

declare module 'material-ui/svg-icons/editor/show-chart' {
    export import EditorShowChart = __MaterialUi.SvgIcon;
    export default EditorShowChart;
}

declare module 'material-ui/svg-icons/editor/space-bar' {
    export import EditorSpaceBar = __MaterialUi.SvgIcon;
    export default EditorSpaceBar;
}

declare module 'material-ui/svg-icons/editor/strikethrough-s' {
    export import EditorStrikethroughS = __MaterialUi.SvgIcon;
    export default EditorStrikethroughS;
}

declare module 'material-ui/svg-icons/editor/text-fields' {
    export import EditorTextFields = __MaterialUi.SvgIcon;
    export default EditorTextFields;
}

declare module 'material-ui/svg-icons/editor/title' {
    export import EditorTitle = __MaterialUi.SvgIcon;
    export default EditorTitle;
}

declare module 'material-ui/svg-icons/editor/vertical-align-bottom' {
    export import EditorVerticalAlignBottom = __MaterialUi.SvgIcon;
    export default EditorVerticalAlignBottom;
}

declare module 'material-ui/svg-icons/editor/vertical-align-center' {
    export import EditorVerticalAlignCenter = __MaterialUi.SvgIcon;
    export default EditorVerticalAlignCenter;
}

declare module 'material-ui/svg-icons/editor/vertical-align-top' {
    export import EditorVerticalAlignTop = __MaterialUi.SvgIcon;
    export default EditorVerticalAlignTop;
}

declare module 'material-ui/svg-icons/editor/wrap-text' {
    export import EditorWrapText = __MaterialUi.SvgIcon;
    export default EditorWrapText;
}

declare module 'material-ui/svg-icons/file/attachment' {
    export import FileAttachment = __MaterialUi.SvgIcon;
    export default FileAttachment;
}

declare module 'material-ui/svg-icons/file/cloud' {
    export import FileCloud = __MaterialUi.SvgIcon;
    export default FileCloud;
}

declare module 'material-ui/svg-icons/file/cloud-circle' {
    export import FileCloudCircle = __MaterialUi.SvgIcon;
    export default FileCloudCircle;
}

declare module 'material-ui/svg-icons/file/cloud-done' {
    export import FileCloudDone = __MaterialUi.SvgIcon;
    export default FileCloudDone;
}

declare module 'material-ui/svg-icons/file/cloud-download' {
    export import FileCloudDownload = __MaterialUi.SvgIcon;
    export default FileCloudDownload;
}

declare module 'material-ui/svg-icons/file/cloud-off' {
    export import FileCloudOff = __MaterialUi.SvgIcon;
    export default FileCloudOff;
}

declare module 'material-ui/svg-icons/file/cloud-queue' {
    export import FileCloudQueue = __MaterialUi.SvgIcon;
    export default FileCloudQueue;
}

declare module 'material-ui/svg-icons/file/cloud-upload' {
    export import FileCloudUpload = __MaterialUi.SvgIcon;
    export default FileCloudUpload;
}

declare module 'material-ui/svg-icons/file/create-new-folder' {
    export import FileCreateNewFolder = __MaterialUi.SvgIcon;
    export default FileCreateNewFolder;
}

declare module 'material-ui/svg-icons/file/file-download' {
    export import FileFileDownload = __MaterialUi.SvgIcon;
    export default FileFileDownload;
}

declare module 'material-ui/svg-icons/file/file-upload' {
    export import FileFileUpload = __MaterialUi.SvgIcon;
    export default FileFileUpload;
}

declare module 'material-ui/svg-icons/file/folder' {
    export import FileFolder = __MaterialUi.SvgIcon;
    export default FileFolder;
}

declare module 'material-ui/svg-icons/file/folder-open' {
    export import FileFolderOpen = __MaterialUi.SvgIcon;
    export default FileFolderOpen;
}

declare module 'material-ui/svg-icons/file/folder-shared' {
    export import FileFolderShared = __MaterialUi.SvgIcon;
    export default FileFolderShared;
}

declare module 'material-ui/svg-icons/hardware/cast' {
    export import HardwareCast = __MaterialUi.SvgIcon;
    export default HardwareCast;
}

declare module 'material-ui/svg-icons/hardware/cast-connected' {
    export import HardwareCastConnected = __MaterialUi.SvgIcon;
    export default HardwareCastConnected;
}

declare module 'material-ui/svg-icons/hardware/computer' {
    export import HardwareComputer = __MaterialUi.SvgIcon;
    export default HardwareComputer;
}

declare module 'material-ui/svg-icons/hardware/desktop-mac' {
    export import HardwareDesktopMac = __MaterialUi.SvgIcon;
    export default HardwareDesktopMac;
}

declare module 'material-ui/svg-icons/hardware/desktop-windows' {
    export import HardwareDesktopWindows = __MaterialUi.SvgIcon;
    export default HardwareDesktopWindows;
}

declare module 'material-ui/svg-icons/hardware/developer-board' {
    export import HardwareDeveloperBoard = __MaterialUi.SvgIcon;
    export default HardwareDeveloperBoard;
}

declare module 'material-ui/svg-icons/hardware/device-hub' {
    export import HardwareDeviceHub = __MaterialUi.SvgIcon;
    export default HardwareDeviceHub;
}

declare module 'material-ui/svg-icons/hardware/devices-other' {
    export import HardwareDevicesOther = __MaterialUi.SvgIcon;
    export default HardwareDevicesOther;
}

declare module 'material-ui/svg-icons/hardware/dock' {
    export import HardwareDock = __MaterialUi.SvgIcon;
    export default HardwareDock;
}

declare module 'material-ui/svg-icons/hardware/gamepad' {
    export import HardwareGamepad = __MaterialUi.SvgIcon;
    export default HardwareGamepad;
}

declare module 'material-ui/svg-icons/hardware/headset' {
    export import HardwareHeadset = __MaterialUi.SvgIcon;
    export default HardwareHeadset;
}

declare module 'material-ui/svg-icons/hardware/headset-mic' {
    export import HardwareHeadsetMic = __MaterialUi.SvgIcon;
    export default HardwareHeadsetMic;
}

declare module 'material-ui/svg-icons/hardware/keyboard' {
    export import HardwareKeyboard = __MaterialUi.SvgIcon;
    export default HardwareKeyboard;
}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-down' {
    export import HardwareKeyboardArrowDown = __MaterialUi.SvgIcon;
    export default HardwareKeyboardArrowDown;
}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-left' {
    export import HardwareKeyboardArrowLeft = __MaterialUi.SvgIcon;
    export default HardwareKeyboardArrowLeft;
}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-right' {
    export import HardwareKeyboardArrowRight = __MaterialUi.SvgIcon;
    export default HardwareKeyboardArrowRight;
}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-up' {
    export import HardwareKeyboardArrowUp = __MaterialUi.SvgIcon;
    export default HardwareKeyboardArrowUp;
}

declare module 'material-ui/svg-icons/hardware/keyboard-backspace' {
    export import HardwareKeyboardBackspace = __MaterialUi.SvgIcon;
    export default HardwareKeyboardBackspace;
}

declare module 'material-ui/svg-icons/hardware/keyboard-capslock' {
    export import HardwareKeyboardCapslock = __MaterialUi.SvgIcon;
    export default HardwareKeyboardCapslock;
}

declare module 'material-ui/svg-icons/hardware/keyboard-hide' {
    export import HardwareKeyboardHide = __MaterialUi.SvgIcon;
    export default HardwareKeyboardHide;
}

declare module 'material-ui/svg-icons/hardware/keyboard-return' {
    export import HardwareKeyboardReturn = __MaterialUi.SvgIcon;
    export default HardwareKeyboardReturn;
}

declare module 'material-ui/svg-icons/hardware/keyboard-tab' {
    export import HardwareKeyboardTab = __MaterialUi.SvgIcon;
    export default HardwareKeyboardTab;
}

declare module 'material-ui/svg-icons/hardware/keyboard-voice' {
    export import HardwareKeyboardVoice = __MaterialUi.SvgIcon;
    export default HardwareKeyboardVoice;
}

declare module 'material-ui/svg-icons/hardware/laptop' {
    export import HardwareLaptop = __MaterialUi.SvgIcon;
    export default HardwareLaptop;
}

declare module 'material-ui/svg-icons/hardware/laptop-chromebook' {
    export import HardwareLaptopChromebook = __MaterialUi.SvgIcon;
    export default HardwareLaptopChromebook;
}

declare module 'material-ui/svg-icons/hardware/laptop-mac' {
    export import HardwareLaptopMac = __MaterialUi.SvgIcon;
    export default HardwareLaptopMac;
}

declare module 'material-ui/svg-icons/hardware/laptop-windows' {
    export import HardwareLaptopWindows = __MaterialUi.SvgIcon;
    export default HardwareLaptopWindows;
}

declare module 'material-ui/svg-icons/hardware/memory' {
    export import HardwareMemory = __MaterialUi.SvgIcon;
    export default HardwareMemory;
}

declare module 'material-ui/svg-icons/hardware/mouse' {
    export import HardwareMouse = __MaterialUi.SvgIcon;
    export default HardwareMouse;
}

declare module 'material-ui/svg-icons/hardware/phone-android' {
    export import HardwarePhoneAndroid = __MaterialUi.SvgIcon;
    export default HardwarePhoneAndroid;
}

declare module 'material-ui/svg-icons/hardware/phone-iphone' {
    export import HardwarePhoneIphone = __MaterialUi.SvgIcon;
    export default HardwarePhoneIphone;
}

declare module 'material-ui/svg-icons/hardware/phonelink' {
    export import HardwarePhonelink = __MaterialUi.SvgIcon;
    export default HardwarePhonelink;
}

declare module 'material-ui/svg-icons/hardware/phonelink-off' {
    export import HardwarePhonelinkOff = __MaterialUi.SvgIcon;
    export default HardwarePhonelinkOff;
}

declare module 'material-ui/svg-icons/hardware/power-input' {
    export import HardwarePowerInput = __MaterialUi.SvgIcon;
    export default HardwarePowerInput;
}

declare module 'material-ui/svg-icons/hardware/router' {
    export import HardwareRouter = __MaterialUi.SvgIcon;
    export default HardwareRouter;
}

declare module 'material-ui/svg-icons/hardware/scanner' {
    export import HardwareScanner = __MaterialUi.SvgIcon;
    export default HardwareScanner;
}

declare module 'material-ui/svg-icons/hardware/security' {
    export import HardwareSecurity = __MaterialUi.SvgIcon;
    export default HardwareSecurity;
}

declare module 'material-ui/svg-icons/hardware/sim-card' {
    export import HardwareSimCard = __MaterialUi.SvgIcon;
    export default HardwareSimCard;
}

declare module 'material-ui/svg-icons/hardware/smartphone' {
    export import HardwareSmartphone = __MaterialUi.SvgIcon;
    export default HardwareSmartphone;
}

declare module 'material-ui/svg-icons/hardware/speaker' {
    export import HardwareSpeaker = __MaterialUi.SvgIcon;
    export default HardwareSpeaker;
}

declare module 'material-ui/svg-icons/hardware/speaker-group' {
    export import HardwareSpeakerGroup = __MaterialUi.SvgIcon;
    export default HardwareSpeakerGroup;
}

declare module 'material-ui/svg-icons/hardware/tablet' {
    export import HardwareTablet = __MaterialUi.SvgIcon;
    export default HardwareTablet;
}

declare module 'material-ui/svg-icons/hardware/tablet-android' {
    export import HardwareTabletAndroid = __MaterialUi.SvgIcon;
    export default HardwareTabletAndroid;
}

declare module 'material-ui/svg-icons/hardware/tablet-mac' {
    export import HardwareTabletMac = __MaterialUi.SvgIcon;
    export default HardwareTabletMac;
}

declare module 'material-ui/svg-icons/hardware/toys' {
    export import HardwareToys = __MaterialUi.SvgIcon;
    export default HardwareToys;
}

declare module 'material-ui/svg-icons/hardware/tv' {
    export import HardwareTv = __MaterialUi.SvgIcon;
    export default HardwareTv;
}

declare module 'material-ui/svg-icons/hardware/videogame-asset' {
    export import HardwareVideogameAsset = __MaterialUi.SvgIcon;
    export default HardwareVideogameAsset;
}

declare module 'material-ui/svg-icons/hardware/watch' {
    export import HardwareWatch = __MaterialUi.SvgIcon;
    export default HardwareWatch;
}

declare module 'material-ui/svg-icons/image/add-a-photo' {
    export import ImageAddAPhoto = __MaterialUi.SvgIcon;
    export default ImageAddAPhoto;
}

declare module 'material-ui/svg-icons/image/add-to-photos' {
    export import ImageAddToPhotos = __MaterialUi.SvgIcon;
    export default ImageAddToPhotos;
}

declare module 'material-ui/svg-icons/image/adjust' {
    export import ImageAdjust = __MaterialUi.SvgIcon;
    export default ImageAdjust;
}

declare module 'material-ui/svg-icons/image/assistant' {
    export import ImageAssistant = __MaterialUi.SvgIcon;
    export default ImageAssistant;
}

declare module 'material-ui/svg-icons/image/assistant-photo' {
    export import ImageAssistantPhoto = __MaterialUi.SvgIcon;
    export default ImageAssistantPhoto;
}

declare module 'material-ui/svg-icons/image/audiotrack' {
    export import ImageAudiotrack = __MaterialUi.SvgIcon;
    export default ImageAudiotrack;
}

declare module 'material-ui/svg-icons/image/blur-circular' {
    export import ImageBlurCircular = __MaterialUi.SvgIcon;
    export default ImageBlurCircular;
}

declare module 'material-ui/svg-icons/image/blur-linear' {
    export import ImageBlurLinear = __MaterialUi.SvgIcon;
    export default ImageBlurLinear;
}

declare module 'material-ui/svg-icons/image/blur-off' {
    export import ImageBlurOff = __MaterialUi.SvgIcon;
    export default ImageBlurOff;
}

declare module 'material-ui/svg-icons/image/blur-on' {
    export import ImageBlurOn = __MaterialUi.SvgIcon;
    export default ImageBlurOn;
}

declare module 'material-ui/svg-icons/image/brightness-1' {
    export import ImageBrightness1 = __MaterialUi.SvgIcon;
    export default ImageBrightness1;
}

declare module 'material-ui/svg-icons/image/brightness-2' {
    export import ImageBrightness2 = __MaterialUi.SvgIcon;
    export default ImageBrightness2;
}

declare module 'material-ui/svg-icons/image/brightness-3' {
    export import ImageBrightness3 = __MaterialUi.SvgIcon;
    export default ImageBrightness3;
}

declare module 'material-ui/svg-icons/image/brightness-4' {
    export import ImageBrightness4 = __MaterialUi.SvgIcon;
    export default ImageBrightness4;
}

declare module 'material-ui/svg-icons/image/brightness-5' {
    export import ImageBrightness5 = __MaterialUi.SvgIcon;
    export default ImageBrightness5;
}

declare module 'material-ui/svg-icons/image/brightness-6' {
    export import ImageBrightness6 = __MaterialUi.SvgIcon;
    export default ImageBrightness6;
}

declare module 'material-ui/svg-icons/image/brightness-7' {
    export import ImageBrightness7 = __MaterialUi.SvgIcon;
    export default ImageBrightness7;
}

declare module 'material-ui/svg-icons/image/broken-image' {
    export import ImageBrokenImage = __MaterialUi.SvgIcon;
    export default ImageBrokenImage;
}

declare module 'material-ui/svg-icons/image/brush' {
    export import ImageBrush = __MaterialUi.SvgIcon;
    export default ImageBrush;
}

declare module 'material-ui/svg-icons/image/burst-mode' {
    export import ImageBurstMode = __MaterialUi.SvgIcon;
    export default ImageBurstMode;
}

declare module 'material-ui/svg-icons/image/camera' {
    export import ImageCamera = __MaterialUi.SvgIcon;
    export default ImageCamera;
}

declare module 'material-ui/svg-icons/image/camera-alt' {
    export import ImageCameraAlt = __MaterialUi.SvgIcon;
    export default ImageCameraAlt;
}

declare module 'material-ui/svg-icons/image/camera-front' {
    export import ImageCameraFront = __MaterialUi.SvgIcon;
    export default ImageCameraFront;
}

declare module 'material-ui/svg-icons/image/camera-rear' {
    export import ImageCameraRear = __MaterialUi.SvgIcon;
    export default ImageCameraRear;
}

declare module 'material-ui/svg-icons/image/camera-roll' {
    export import ImageCameraRoll = __MaterialUi.SvgIcon;
    export default ImageCameraRoll;
}

declare module 'material-ui/svg-icons/image/center-focus-strong' {
    export import ImageCenterFocusStrong = __MaterialUi.SvgIcon;
    export default ImageCenterFocusStrong;
}

declare module 'material-ui/svg-icons/image/center-focus-weak' {
    export import ImageCenterFocusWeak = __MaterialUi.SvgIcon;
    export default ImageCenterFocusWeak;
}

declare module 'material-ui/svg-icons/image/collections' {
    export import ImageCollections = __MaterialUi.SvgIcon;
    export default ImageCollections;
}

declare module 'material-ui/svg-icons/image/collections-bookmark' {
    export import ImageCollectionsBookmark = __MaterialUi.SvgIcon;
    export default ImageCollectionsBookmark;
}

declare module 'material-ui/svg-icons/image/color-lens' {
    export import ImageColorLens = __MaterialUi.SvgIcon;
    export default ImageColorLens;
}

declare module 'material-ui/svg-icons/image/colorize' {
    export import ImageColorize = __MaterialUi.SvgIcon;
    export default ImageColorize;
}

declare module 'material-ui/svg-icons/image/compare' {
    export import ImageCompare = __MaterialUi.SvgIcon;
    export default ImageCompare;
}

declare module 'material-ui/svg-icons/image/control-point' {
    export import ImageControlPoint = __MaterialUi.SvgIcon;
    export default ImageControlPoint;
}

declare module 'material-ui/svg-icons/image/control-point-duplicate' {
    export import ImageControlPointDuplicate = __MaterialUi.SvgIcon;
    export default ImageControlPointDuplicate;
}

declare module 'material-ui/svg-icons/image/crop' {
    export import ImageCrop = __MaterialUi.SvgIcon;
    export default ImageCrop;
}

declare module 'material-ui/svg-icons/image/crop-16-9' {
    export import ImageCrop169 = __MaterialUi.SvgIcon;
    export default ImageCrop169;
}

declare module 'material-ui/svg-icons/image/crop-3-2' {
    export import ImageCrop32 = __MaterialUi.SvgIcon;
    export default ImageCrop32;
}

declare module 'material-ui/svg-icons/image/crop-5-4' {
    export import ImageCrop54 = __MaterialUi.SvgIcon;
    export default ImageCrop54;
}

declare module 'material-ui/svg-icons/image/crop-7-5' {
    export import ImageCrop75 = __MaterialUi.SvgIcon;
    export default ImageCrop75;
}

declare module 'material-ui/svg-icons/image/crop-din' {
    export import ImageCropDin = __MaterialUi.SvgIcon;
    export default ImageCropDin;
}

declare module 'material-ui/svg-icons/image/crop-free' {
    export import ImageCropFree = __MaterialUi.SvgIcon;
    export default ImageCropFree;
}

declare module 'material-ui/svg-icons/image/crop-landscape' {
    export import ImageCropLandscape = __MaterialUi.SvgIcon;
    export default ImageCropLandscape;
}

declare module 'material-ui/svg-icons/image/crop-original' {
    export import ImageCropOriginal = __MaterialUi.SvgIcon;
    export default ImageCropOriginal;
}

declare module 'material-ui/svg-icons/image/crop-portrait' {
    export import ImageCropPortrait = __MaterialUi.SvgIcon;
    export default ImageCropPortrait;
}

declare module 'material-ui/svg-icons/image/crop-rotate' {
    export import ImageCropRotate = __MaterialUi.SvgIcon;
    export default ImageCropRotate;
}

declare module 'material-ui/svg-icons/image/crop-square' {
    export import ImageCropSquare = __MaterialUi.SvgIcon;
    export default ImageCropSquare;
}

declare module 'material-ui/svg-icons/image/dehaze' {
    export import ImageDehaze = __MaterialUi.SvgIcon;
    export default ImageDehaze;
}

declare module 'material-ui/svg-icons/image/details' {
    export import ImageDetails = __MaterialUi.SvgIcon;
    export default ImageDetails;
}

declare module 'material-ui/svg-icons/image/edit' {
    export import ImageEdit = __MaterialUi.SvgIcon;
    export default ImageEdit;
}

declare module 'material-ui/svg-icons/image/exposure' {
    export import ImageExposure = __MaterialUi.SvgIcon;
    export default ImageExposure;
}

declare module 'material-ui/svg-icons/image/exposure-neg-1' {
    export import ImageExposureNeg1 = __MaterialUi.SvgIcon;
    export default ImageExposureNeg1;
}

declare module 'material-ui/svg-icons/image/exposure-neg-2' {
    export import ImageExposureNeg2 = __MaterialUi.SvgIcon;
    export default ImageExposureNeg2;
}

declare module 'material-ui/svg-icons/image/exposure-plus-1' {
    export import ImageExposurePlus1 = __MaterialUi.SvgIcon;
    export default ImageExposurePlus1;
}

declare module 'material-ui/svg-icons/image/exposure-plus-2' {
    export import ImageExposurePlus2 = __MaterialUi.SvgIcon;
    export default ImageExposurePlus2;
}

declare module 'material-ui/svg-icons/image/exposure-zero' {
    export import ImageExposureZero = __MaterialUi.SvgIcon;
    export default ImageExposureZero;
}

declare module 'material-ui/svg-icons/image/filter' {
    export import ImageFilter = __MaterialUi.SvgIcon;
    export default ImageFilter;
}

declare module 'material-ui/svg-icons/image/filter-1' {
    export import ImageFilter1 = __MaterialUi.SvgIcon;
    export default ImageFilter1;
}

declare module 'material-ui/svg-icons/image/filter-2' {
    export import ImageFilter2 = __MaterialUi.SvgIcon;
    export default ImageFilter2;
}

declare module 'material-ui/svg-icons/image/filter-3' {
    export import ImageFilter3 = __MaterialUi.SvgIcon;
    export default ImageFilter3;
}

declare module 'material-ui/svg-icons/image/filter-4' {
    export import ImageFilter4 = __MaterialUi.SvgIcon;
    export default ImageFilter4;
}

declare module 'material-ui/svg-icons/image/filter-5' {
    export import ImageFilter5 = __MaterialUi.SvgIcon;
    export default ImageFilter5;
}

declare module 'material-ui/svg-icons/image/filter-6' {
    export import ImageFilter6 = __MaterialUi.SvgIcon;
    export default ImageFilter6;
}

declare module 'material-ui/svg-icons/image/filter-7' {
    export import ImageFilter7 = __MaterialUi.SvgIcon;
    export default ImageFilter7;
}

declare module 'material-ui/svg-icons/image/filter-8' {
    export import ImageFilter8 = __MaterialUi.SvgIcon;
    export default ImageFilter8;
}

declare module 'material-ui/svg-icons/image/filter-9' {
    export import ImageFilter9 = __MaterialUi.SvgIcon;
    export default ImageFilter9;
}

declare module 'material-ui/svg-icons/image/filter-9-plus' {
    export import ImageFilter9Plus = __MaterialUi.SvgIcon;
    export default ImageFilter9Plus;
}

declare module 'material-ui/svg-icons/image/filter-b-and-w' {
    export import ImageFilterBAndW = __MaterialUi.SvgIcon;
    export default ImageFilterBAndW;
}

declare module 'material-ui/svg-icons/image/filter-center-focus' {
    export import ImageFilterCenterFocus = __MaterialUi.SvgIcon;
    export default ImageFilterCenterFocus;
}

declare module 'material-ui/svg-icons/image/filter-drama' {
    export import ImageFilterDrama = __MaterialUi.SvgIcon;
    export default ImageFilterDrama;
}

declare module 'material-ui/svg-icons/image/filter-frames' {
    export import ImageFilterFrames = __MaterialUi.SvgIcon;
    export default ImageFilterFrames;
}

declare module 'material-ui/svg-icons/image/filter-hdr' {
    export import ImageFilterHdr = __MaterialUi.SvgIcon;
    export default ImageFilterHdr;
}

declare module 'material-ui/svg-icons/image/filter-none' {
    export import ImageFilterNone = __MaterialUi.SvgIcon;
    export default ImageFilterNone;
}

declare module 'material-ui/svg-icons/image/filter-tilt-shift' {
    export import ImageFilterTiltShift = __MaterialUi.SvgIcon;
    export default ImageFilterTiltShift;
}

declare module 'material-ui/svg-icons/image/filter-vintage' {
    export import ImageFilterVintage = __MaterialUi.SvgIcon;
    export default ImageFilterVintage;
}

declare module 'material-ui/svg-icons/image/flare' {
    export import ImageFlare = __MaterialUi.SvgIcon;
    export default ImageFlare;
}

declare module 'material-ui/svg-icons/image/flash-auto' {
    export import ImageFlashAuto = __MaterialUi.SvgIcon;
    export default ImageFlashAuto;
}

declare module 'material-ui/svg-icons/image/flash-off' {
    export import ImageFlashOff = __MaterialUi.SvgIcon;
    export default ImageFlashOff;
}

declare module 'material-ui/svg-icons/image/flash-on' {
    export import ImageFlashOn = __MaterialUi.SvgIcon;
    export default ImageFlashOn;
}

declare module 'material-ui/svg-icons/image/flip' {
    export import ImageFlip = __MaterialUi.SvgIcon;
    export default ImageFlip;
}

declare module 'material-ui/svg-icons/image/gradient' {
    export import ImageGradient = __MaterialUi.SvgIcon;
    export default ImageGradient;
}

declare module 'material-ui/svg-icons/image/grain' {
    export import ImageGrain = __MaterialUi.SvgIcon;
    export default ImageGrain;
}

declare module 'material-ui/svg-icons/image/grid-off' {
    export import ImageGridOff = __MaterialUi.SvgIcon;
    export default ImageGridOff;
}

declare module 'material-ui/svg-icons/image/grid-on' {
    export import ImageGridOn = __MaterialUi.SvgIcon;
    export default ImageGridOn;
}

declare module 'material-ui/svg-icons/image/hdr-off' {
    export import ImageHdrOff = __MaterialUi.SvgIcon;
    export default ImageHdrOff;
}

declare module 'material-ui/svg-icons/image/hdr-on' {
    export import ImageHdrOn = __MaterialUi.SvgIcon;
    export default ImageHdrOn;
}

declare module 'material-ui/svg-icons/image/hdr-strong' {
    export import ImageHdrStrong = __MaterialUi.SvgIcon;
    export default ImageHdrStrong;
}

declare module 'material-ui/svg-icons/image/hdr-weak' {
    export import ImageHdrWeak = __MaterialUi.SvgIcon;
    export default ImageHdrWeak;
}

declare module 'material-ui/svg-icons/image/healing' {
    export import ImageHealing = __MaterialUi.SvgIcon;
    export default ImageHealing;
}

declare module 'material-ui/svg-icons/image/image' {
    export import ImageImage = __MaterialUi.SvgIcon;
    export default ImageImage;
}

declare module 'material-ui/svg-icons/image/image-aspect-ratio' {
    export import ImageImageAspectRatio = __MaterialUi.SvgIcon;
    export default ImageImageAspectRatio;
}

declare module 'material-ui/svg-icons/image/iso' {
    export import ImageIso = __MaterialUi.SvgIcon;
    export default ImageIso;
}

declare module 'material-ui/svg-icons/image/landscape' {
    export import ImageLandscape = __MaterialUi.SvgIcon;
    export default ImageLandscape;
}

declare module 'material-ui/svg-icons/image/leak-add' {
    export import ImageLeakAdd = __MaterialUi.SvgIcon;
    export default ImageLeakAdd;
}

declare module 'material-ui/svg-icons/image/leak-remove' {
    export import ImageLeakRemove = __MaterialUi.SvgIcon;
    export default ImageLeakRemove;
}

declare module 'material-ui/svg-icons/image/lens' {
    export import ImageLens = __MaterialUi.SvgIcon;
    export default ImageLens;
}

declare module 'material-ui/svg-icons/image/linked-camera' {
    export import ImageLinkedCamera = __MaterialUi.SvgIcon;
    export default ImageLinkedCamera;
}

declare module 'material-ui/svg-icons/image/looks' {
    export import ImageLooks = __MaterialUi.SvgIcon;
    export default ImageLooks;
}

declare module 'material-ui/svg-icons/image/looks-3' {
    export import ImageLooks3 = __MaterialUi.SvgIcon;
    export default ImageLooks3;
}

declare module 'material-ui/svg-icons/image/looks-4' {
    export import ImageLooks4 = __MaterialUi.SvgIcon;
    export default ImageLooks4;
}

declare module 'material-ui/svg-icons/image/looks-5' {
    export import ImageLooks5 = __MaterialUi.SvgIcon;
    export default ImageLooks5;
}

declare module 'material-ui/svg-icons/image/looks-6' {
    export import ImageLooks6 = __MaterialUi.SvgIcon;
    export default ImageLooks6;
}

declare module 'material-ui/svg-icons/image/looks-one' {
    export import ImageLooksOne = __MaterialUi.SvgIcon;
    export default ImageLooksOne;
}

declare module 'material-ui/svg-icons/image/looks-two' {
    export import ImageLooksTwo = __MaterialUi.SvgIcon;
    export default ImageLooksTwo;
}

declare module 'material-ui/svg-icons/image/loupe' {
    export import ImageLoupe = __MaterialUi.SvgIcon;
    export default ImageLoupe;
}

declare module 'material-ui/svg-icons/image/monochrome-photos' {
    export import ImageMonochromePhotos = __MaterialUi.SvgIcon;
    export default ImageMonochromePhotos;
}

declare module 'material-ui/svg-icons/image/movie-creation' {
    export import ImageMovieCreation = __MaterialUi.SvgIcon;
    export default ImageMovieCreation;
}

declare module 'material-ui/svg-icons/image/movie-filter' {
    export import ImageMovieFilter = __MaterialUi.SvgIcon;
    export default ImageMovieFilter;
}

declare module 'material-ui/svg-icons/image/music-note' {
    export import ImageMusicNote = __MaterialUi.SvgIcon;
    export default ImageMusicNote;
}

declare module 'material-ui/svg-icons/image/nature' {
    export import ImageNature = __MaterialUi.SvgIcon;
    export default ImageNature;
}

declare module 'material-ui/svg-icons/image/nature-people' {
    export import ImageNaturePeople = __MaterialUi.SvgIcon;
    export default ImageNaturePeople;
}

declare module 'material-ui/svg-icons/image/navigate-before' {
    export import ImageNavigateBefore = __MaterialUi.SvgIcon;
    export default ImageNavigateBefore;
}

declare module 'material-ui/svg-icons/image/navigate-next' {
    export import ImageNavigateNext = __MaterialUi.SvgIcon;
    export default ImageNavigateNext;
}

declare module 'material-ui/svg-icons/image/palette' {
    export import ImagePalette = __MaterialUi.SvgIcon;
    export default ImagePalette;
}

declare module 'material-ui/svg-icons/image/panorama' {
    export import ImagePanorama = __MaterialUi.SvgIcon;
    export default ImagePanorama;
}

declare module 'material-ui/svg-icons/image/panorama-fish-eye' {
    export import ImagePanoramaFishEye = __MaterialUi.SvgIcon;
    export default ImagePanoramaFishEye;
}

declare module 'material-ui/svg-icons/image/panorama-horizontal' {
    export import ImagePanoramaHorizontal = __MaterialUi.SvgIcon;
    export default ImagePanoramaHorizontal;
}

declare module 'material-ui/svg-icons/image/panorama-vertical' {
    export import ImagePanoramaVertical = __MaterialUi.SvgIcon;
    export default ImagePanoramaVertical;
}

declare module 'material-ui/svg-icons/image/panorama-wide-angle' {
    export import ImagePanoramaWideAngle = __MaterialUi.SvgIcon;
    export default ImagePanoramaWideAngle;
}

declare module 'material-ui/svg-icons/image/photo' {
    export import ImagePhoto = __MaterialUi.SvgIcon;
    export default ImagePhoto;
}

declare module 'material-ui/svg-icons/image/photo-album' {
    export import ImagePhotoAlbum = __MaterialUi.SvgIcon;
    export default ImagePhotoAlbum;
}

declare module 'material-ui/svg-icons/image/photo-camera' {
    export import ImagePhotoCamera = __MaterialUi.SvgIcon;
    export default ImagePhotoCamera;
}

declare module 'material-ui/svg-icons/image/photo-filter' {
    export import ImagePhotoFilter = __MaterialUi.SvgIcon;
    export default ImagePhotoFilter;
}

declare module 'material-ui/svg-icons/image/photo-library' {
    export import ImagePhotoLibrary = __MaterialUi.SvgIcon;
    export default ImagePhotoLibrary;
}

declare module 'material-ui/svg-icons/image/photo-size-select-actual' {
    export import ImagePhotoSizeSelectActual = __MaterialUi.SvgIcon;
    export default ImagePhotoSizeSelectActual;
}

declare module 'material-ui/svg-icons/image/photo-size-select-large' {
    export import ImagePhotoSizeSelectLarge = __MaterialUi.SvgIcon;
    export default ImagePhotoSizeSelectLarge;
}

declare module 'material-ui/svg-icons/image/photo-size-select-small' {
    export import ImagePhotoSizeSelectSmall = __MaterialUi.SvgIcon;
    export default ImagePhotoSizeSelectSmall;
}

declare module 'material-ui/svg-icons/image/picture-as-pdf' {
    export import ImagePictureAsPdf = __MaterialUi.SvgIcon;
    export default ImagePictureAsPdf;
}

declare module 'material-ui/svg-icons/image/portrait' {
    export import ImagePortrait = __MaterialUi.SvgIcon;
    export default ImagePortrait;
}

declare module 'material-ui/svg-icons/image/remove-red-eye' {
    export import ImageRemoveRedEye = __MaterialUi.SvgIcon;
    export default ImageRemoveRedEye;
}

declare module 'material-ui/svg-icons/image/rotate-90-degrees-ccw' {
    export import ImageRotate90DegreesCcw = __MaterialUi.SvgIcon;
    export default ImageRotate90DegreesCcw;
}

declare module 'material-ui/svg-icons/image/rotate-left' {
    export import ImageRotateLeft = __MaterialUi.SvgIcon;
    export default ImageRotateLeft;
}

declare module 'material-ui/svg-icons/image/rotate-right' {
    export import ImageRotateRight = __MaterialUi.SvgIcon;
    export default ImageRotateRight;
}

declare module 'material-ui/svg-icons/image/slideshow' {
    export import ImageSlideshow = __MaterialUi.SvgIcon;
    export default ImageSlideshow;
}

declare module 'material-ui/svg-icons/image/straighten' {
    export import ImageStraighten = __MaterialUi.SvgIcon;
    export default ImageStraighten;
}

declare module 'material-ui/svg-icons/image/style' {
    export import ImageStyle = __MaterialUi.SvgIcon;
    export default ImageStyle;
}

declare module 'material-ui/svg-icons/image/switch-camera' {
    export import ImageSwitchCamera = __MaterialUi.SvgIcon;
    export default ImageSwitchCamera;
}

declare module 'material-ui/svg-icons/image/switch-video' {
    export import ImageSwitchVideo = __MaterialUi.SvgIcon;
    export default ImageSwitchVideo;
}

declare module 'material-ui/svg-icons/image/tag-faces' {
    export import ImageTagFaces = __MaterialUi.SvgIcon;
    export default ImageTagFaces;
}

declare module 'material-ui/svg-icons/image/texture' {
    export import ImageTexture = __MaterialUi.SvgIcon;
    export default ImageTexture;
}

declare module 'material-ui/svg-icons/image/timelapse' {
    export import ImageTimelapse = __MaterialUi.SvgIcon;
    export default ImageTimelapse;
}

declare module 'material-ui/svg-icons/image/timer' {
    export import ImageTimer = __MaterialUi.SvgIcon;
    export default ImageTimer;
}

declare module 'material-ui/svg-icons/image/timer-10' {
    export import ImageTimer10 = __MaterialUi.SvgIcon;
    export default ImageTimer10;
}

declare module 'material-ui/svg-icons/image/timer-3' {
    export import ImageTimer3 = __MaterialUi.SvgIcon;
    export default ImageTimer3;
}

declare module 'material-ui/svg-icons/image/timer-off' {
    export import ImageTimerOff = __MaterialUi.SvgIcon;
    export default ImageTimerOff;
}

declare module 'material-ui/svg-icons/image/tonality' {
    export import ImageTonality = __MaterialUi.SvgIcon;
    export default ImageTonality;
}

declare module 'material-ui/svg-icons/image/transform' {
    export import ImageTransform = __MaterialUi.SvgIcon;
    export default ImageTransform;
}

declare module 'material-ui/svg-icons/image/tune' {
    export import ImageTune = __MaterialUi.SvgIcon;
    export default ImageTune;
}

declare module 'material-ui/svg-icons/image/view-comfy' {
    export import ImageViewComfy = __MaterialUi.SvgIcon;
    export default ImageViewComfy;
}

declare module 'material-ui/svg-icons/image/view-compact' {
    export import ImageViewCompact = __MaterialUi.SvgIcon;
    export default ImageViewCompact;
}

declare module 'material-ui/svg-icons/image/vignette' {
    export import ImageVignette = __MaterialUi.SvgIcon;
    export default ImageVignette;
}

declare module 'material-ui/svg-icons/image/wb-auto' {
    export import ImageWbAuto = __MaterialUi.SvgIcon;
    export default ImageWbAuto;
}

declare module 'material-ui/svg-icons/image/wb-cloudy' {
    export import ImageWbCloudy = __MaterialUi.SvgIcon;
    export default ImageWbCloudy;
}

declare module 'material-ui/svg-icons/image/wb-incandescent' {
    export import ImageWbIncandescent = __MaterialUi.SvgIcon;
    export default ImageWbIncandescent;
}

declare module 'material-ui/svg-icons/image/wb-iridescent' {
    export import ImageWbIridescent = __MaterialUi.SvgIcon;
    export default ImageWbIridescent;
}

declare module 'material-ui/svg-icons/image/wb-sunny' {
    export import ImageWbSunny = __MaterialUi.SvgIcon;
    export default ImageWbSunny;
}

declare module 'material-ui/svg-icons/maps/add-location' {
    export import MapsAddLocation = __MaterialUi.SvgIcon;
    export default MapsAddLocation;
}

declare module 'material-ui/svg-icons/maps/beenhere' {
    export import MapsBeenhere = __MaterialUi.SvgIcon;
    export default MapsBeenhere;
}

declare module 'material-ui/svg-icons/maps/directions' {
    export import MapsDirections = __MaterialUi.SvgIcon;
    export default MapsDirections;
}

declare module 'material-ui/svg-icons/maps/directions-bike' {
    export import MapsDirectionsBike = __MaterialUi.SvgIcon;
    export default MapsDirectionsBike;
}

declare module 'material-ui/svg-icons/maps/directions-boat' {
    export import MapsDirectionsBoat = __MaterialUi.SvgIcon;
    export default MapsDirectionsBoat;
}

declare module 'material-ui/svg-icons/maps/directions-bus' {
    export import MapsDirectionsBus = __MaterialUi.SvgIcon;
    export default MapsDirectionsBus;
}

declare module 'material-ui/svg-icons/maps/directions-car' {
    export import MapsDirectionsCar = __MaterialUi.SvgIcon;
    export default MapsDirectionsCar;
}

declare module 'material-ui/svg-icons/maps/directions-railway' {
    export import MapsDirectionsRailway = __MaterialUi.SvgIcon;
    export default MapsDirectionsRailway;
}

declare module 'material-ui/svg-icons/maps/directions-run' {
    export import MapsDirectionsRun = __MaterialUi.SvgIcon;
    export default MapsDirectionsRun;
}

declare module 'material-ui/svg-icons/maps/directions-subway' {
    export import MapsDirectionsSubway = __MaterialUi.SvgIcon;
    export default MapsDirectionsSubway;
}

declare module 'material-ui/svg-icons/maps/directions-transit' {
    export import MapsDirectionsTransit = __MaterialUi.SvgIcon;
    export default MapsDirectionsTransit;
}

declare module 'material-ui/svg-icons/maps/directions-walk' {
    export import MapsDirectionsWalk = __MaterialUi.SvgIcon;
    export default MapsDirectionsWalk;
}

declare module 'material-ui/svg-icons/maps/edit-location' {
    export import MapsEditLocation = __MaterialUi.SvgIcon;
    export default MapsEditLocation;
}

declare module 'material-ui/svg-icons/maps/ev-station' {
    export import MapsEvStation = __MaterialUi.SvgIcon;
    export default MapsEvStation;
}

declare module 'material-ui/svg-icons/maps/flight' {
    export import MapsFlight = __MaterialUi.SvgIcon;
    export default MapsFlight;
}

declare module 'material-ui/svg-icons/maps/hotel' {
    export import MapsHotel = __MaterialUi.SvgIcon;
    export default MapsHotel;
}

declare module 'material-ui/svg-icons/maps/layers' {
    export import MapsLayers = __MaterialUi.SvgIcon;
    export default MapsLayers;
}

declare module 'material-ui/svg-icons/maps/layers-clear' {
    export import MapsLayersClear = __MaterialUi.SvgIcon;
    export default MapsLayersClear;
}

declare module 'material-ui/svg-icons/maps/local-activity' {
    export import MapsLocalActivity = __MaterialUi.SvgIcon;
    export default MapsLocalActivity;
}

declare module 'material-ui/svg-icons/maps/local-airport' {
    export import MapsLocalAirport = __MaterialUi.SvgIcon;
    export default MapsLocalAirport;
}

declare module 'material-ui/svg-icons/maps/local-atm' {
    export import MapsLocalAtm = __MaterialUi.SvgIcon;
    export default MapsLocalAtm;
}

declare module 'material-ui/svg-icons/maps/local-bar' {
    export import MapsLocalBar = __MaterialUi.SvgIcon;
    export default MapsLocalBar;
}

declare module 'material-ui/svg-icons/maps/local-cafe' {
    export import MapsLocalCafe = __MaterialUi.SvgIcon;
    export default MapsLocalCafe;
}

declare module 'material-ui/svg-icons/maps/local-car-wash' {
    export import MapsLocalCarWash = __MaterialUi.SvgIcon;
    export default MapsLocalCarWash;
}

declare module 'material-ui/svg-icons/maps/local-convenience-store' {
    export import MapsLocalConvenienceStore = __MaterialUi.SvgIcon;
    export default MapsLocalConvenienceStore;
}

declare module 'material-ui/svg-icons/maps/local-dining' {
    export import MapsLocalDining = __MaterialUi.SvgIcon;
    export default MapsLocalDining;
}

declare module 'material-ui/svg-icons/maps/local-drink' {
    export import MapsLocalDrink = __MaterialUi.SvgIcon;
    export default MapsLocalDrink;
}

declare module 'material-ui/svg-icons/maps/local-florist' {
    export import MapsLocalFlorist = __MaterialUi.SvgIcon;
    export default MapsLocalFlorist;
}

declare module 'material-ui/svg-icons/maps/local-gas-station' {
    export import MapsLocalGasStation = __MaterialUi.SvgIcon;
    export default MapsLocalGasStation;
}

declare module 'material-ui/svg-icons/maps/local-grocery-store' {
    export import MapsLocalGroceryStore = __MaterialUi.SvgIcon;
    export default MapsLocalGroceryStore;
}

declare module 'material-ui/svg-icons/maps/local-hospital' {
    export import MapsLocalHospital = __MaterialUi.SvgIcon;
    export default MapsLocalHospital;
}

declare module 'material-ui/svg-icons/maps/local-hotel' {
    export import MapsLocalHotel = __MaterialUi.SvgIcon;
    export default MapsLocalHotel;
}

declare module 'material-ui/svg-icons/maps/local-laundry-service' {
    export import MapsLocalLaundryService = __MaterialUi.SvgIcon;
    export default MapsLocalLaundryService;
}

declare module 'material-ui/svg-icons/maps/local-library' {
    export import MapsLocalLibrary = __MaterialUi.SvgIcon;
    export default MapsLocalLibrary;
}

declare module 'material-ui/svg-icons/maps/local-mall' {
    export import MapsLocalMall = __MaterialUi.SvgIcon;
    export default MapsLocalMall;
}

declare module 'material-ui/svg-icons/maps/local-movies' {
    export import MapsLocalMovies = __MaterialUi.SvgIcon;
    export default MapsLocalMovies;
}

declare module 'material-ui/svg-icons/maps/local-offer' {
    export import MapsLocalOffer = __MaterialUi.SvgIcon;
    export default MapsLocalOffer;
}

declare module 'material-ui/svg-icons/maps/local-parking' {
    export import MapsLocalParking = __MaterialUi.SvgIcon;
    export default MapsLocalParking;
}

declare module 'material-ui/svg-icons/maps/local-pharmacy' {
    export import MapsLocalPharmacy = __MaterialUi.SvgIcon;
    export default MapsLocalPharmacy;
}

declare module 'material-ui/svg-icons/maps/local-phone' {
    export import MapsLocalPhone = __MaterialUi.SvgIcon;
    export default MapsLocalPhone;
}

declare module 'material-ui/svg-icons/maps/local-pizza' {
    export import MapsLocalPizza = __MaterialUi.SvgIcon;
    export default MapsLocalPizza;
}

declare module 'material-ui/svg-icons/maps/local-play' {
    export import MapsLocalPlay = __MaterialUi.SvgIcon;
    export default MapsLocalPlay;
}

declare module 'material-ui/svg-icons/maps/local-post-office' {
    export import MapsLocalPostOffice = __MaterialUi.SvgIcon;
    export default MapsLocalPostOffice;
}

declare module 'material-ui/svg-icons/maps/local-printshop' {
    export import MapsLocalPrintshop = __MaterialUi.SvgIcon;
    export default MapsLocalPrintshop;
}

declare module 'material-ui/svg-icons/maps/local-see' {
    export import MapsLocalSee = __MaterialUi.SvgIcon;
    export default MapsLocalSee;
}

declare module 'material-ui/svg-icons/maps/local-shipping' {
    export import MapsLocalShipping = __MaterialUi.SvgIcon;
    export default MapsLocalShipping;
}

declare module 'material-ui/svg-icons/maps/local-taxi' {
    export import MapsLocalTaxi = __MaterialUi.SvgIcon;
    export default MapsLocalTaxi;
}

declare module 'material-ui/svg-icons/maps/map' {
    export import MapsMap = __MaterialUi.SvgIcon;
    export default MapsMap;
}

declare module 'material-ui/svg-icons/maps/my-location' {
    export import MapsMyLocation = __MaterialUi.SvgIcon;
    export default MapsMyLocation;
}

declare module 'material-ui/svg-icons/maps/navigation' {
    export import MapsNavigation = __MaterialUi.SvgIcon;
    export default MapsNavigation;
}

declare module 'material-ui/svg-icons/maps/near-me' {
    export import MapsNearMe = __MaterialUi.SvgIcon;
    export default MapsNearMe;
}

declare module 'material-ui/svg-icons/maps/person-pin' {
    export import MapsPersonPin = __MaterialUi.SvgIcon;
    export default MapsPersonPin;
}

declare module 'material-ui/svg-icons/maps/person-pin-circle' {
    export import MapsPersonPinCircle = __MaterialUi.SvgIcon;
    export default MapsPersonPinCircle;
}

declare module 'material-ui/svg-icons/maps/pin-drop' {
    export import MapsPinDrop = __MaterialUi.SvgIcon;
    export default MapsPinDrop;
}

declare module 'material-ui/svg-icons/maps/place' {
    export import MapsPlace = __MaterialUi.SvgIcon;
    export default MapsPlace;
}

declare module 'material-ui/svg-icons/maps/rate-review' {
    export import MapsRateReview = __MaterialUi.SvgIcon;
    export default MapsRateReview;
}

declare module 'material-ui/svg-icons/maps/restaurant' {
    export import MapsRestaurant = __MaterialUi.SvgIcon;
    export default MapsRestaurant;
}

declare module 'material-ui/svg-icons/maps/restaurant-menu' {
    export import MapsRestaurantMenu = __MaterialUi.SvgIcon;
    export default MapsRestaurantMenu;
}

declare module 'material-ui/svg-icons/maps/satellite' {
    export import MapsSatellite = __MaterialUi.SvgIcon;
    export default MapsSatellite;
}

declare module 'material-ui/svg-icons/maps/store-mall-directory' {
    export import MapsStoreMallDirectory = __MaterialUi.SvgIcon;
    export default MapsStoreMallDirectory;
}

declare module 'material-ui/svg-icons/maps/streetview' {
    export import MapsStreetview = __MaterialUi.SvgIcon;
    export default MapsStreetview;
}

declare module 'material-ui/svg-icons/maps/subway' {
    export import MapsSubway = __MaterialUi.SvgIcon;
    export default MapsSubway;
}

declare module 'material-ui/svg-icons/maps/terrain' {
    export import MapsTerrain = __MaterialUi.SvgIcon;
    export default MapsTerrain;
}

declare module 'material-ui/svg-icons/maps/traffic' {
    export import MapsTraffic = __MaterialUi.SvgIcon;
    export default MapsTraffic;
}

declare module 'material-ui/svg-icons/maps/train' {
    export import MapsTrain = __MaterialUi.SvgIcon;
    export default MapsTrain;
}

declare module 'material-ui/svg-icons/maps/tram' {
    export import MapsTram = __MaterialUi.SvgIcon;
    export default MapsTram;
}

declare module 'material-ui/svg-icons/maps/transfer-within-a-station' {
    export import MapsTransferWithinAStation = __MaterialUi.SvgIcon;
    export default MapsTransferWithinAStation;
}

declare module 'material-ui/svg-icons/maps/zoom-out-map' {
    export import MapsZoomOutMap = __MaterialUi.SvgIcon;
    export default MapsZoomOutMap;
}

declare module 'material-ui/svg-icons/navigation/apps' {
    export import NavigationApps = __MaterialUi.SvgIcon;
    export default NavigationApps;
}

declare module 'material-ui/svg-icons/navigation/arrow-back' {
    export import NavigationArrowBack = __MaterialUi.SvgIcon;
    export default NavigationArrowBack;
}

declare module 'material-ui/svg-icons/navigation/arrow-downward' {
    export import NavigationArrowDownward = __MaterialUi.SvgIcon;
    export default NavigationArrowDownward;
}

declare module 'material-ui/svg-icons/navigation/arrow-drop-down' {
    export import NavigationArrowDropDown = __MaterialUi.SvgIcon;
    export default NavigationArrowDropDown;
}

declare module 'material-ui/svg-icons/navigation/arrow-drop-down-circle' {
    export import NavigationArrowDropDownCircle = __MaterialUi.SvgIcon;
    export default NavigationArrowDropDownCircle;
}

declare module 'material-ui/svg-icons/navigation/arrow-drop-up' {
    export import NavigationArrowDropUp = __MaterialUi.SvgIcon;
    export default NavigationArrowDropUp;
}

declare module 'material-ui/svg-icons/navigation/arrow-forward' {
    export import NavigationArrowForward = __MaterialUi.SvgIcon;
    export default NavigationArrowForward;
}

declare module 'material-ui/svg-icons/navigation/arrow-upward' {
    export import NavigationArrowUpward = __MaterialUi.SvgIcon;
    export default NavigationArrowUpward;
}

declare module 'material-ui/svg-icons/navigation/cancel' {
    export import NavigationCancel = __MaterialUi.SvgIcon;
    export default NavigationCancel;
}

declare module 'material-ui/svg-icons/navigation/check' {
    export import NavigationCheck = __MaterialUi.SvgIcon;
    export default NavigationCheck;
}

declare module 'material-ui/svg-icons/navigation/chevron-left' {
    export import NavigationChevronLeft = __MaterialUi.SvgIcon;
    export default NavigationChevronLeft;
}

declare module 'material-ui/svg-icons/navigation/chevron-right' {
    export import NavigationChevronRight = __MaterialUi.SvgIcon;
    export default NavigationChevronRight;
}

declare module 'material-ui/svg-icons/navigation/close' {
    export import NavigationClose = __MaterialUi.SvgIcon;
    export default NavigationClose;
}

declare module 'material-ui/svg-icons/navigation/expand-less' {
    export import NavigationExpandLess = __MaterialUi.SvgIcon;
    export default NavigationExpandLess;
}

declare module 'material-ui/svg-icons/navigation/expand-more' {
    export import NavigationExpandMore = __MaterialUi.SvgIcon;
    export default NavigationExpandMore;
}

declare module 'material-ui/svg-icons/navigation/first-page' {
    export import NavigationFirstPage = __MaterialUi.SvgIcon;
    export default NavigationFirstPage;
}

declare module 'material-ui/svg-icons/navigation/fullscreen' {
    export import NavigationFullscreen = __MaterialUi.SvgIcon;
    export default NavigationFullscreen;
}

declare module 'material-ui/svg-icons/navigation/fullscreen-exit' {
    export import NavigationFullscreenExit = __MaterialUi.SvgIcon;
    export default NavigationFullscreenExit;
}

declare module 'material-ui/svg-icons/navigation/last-page' {
    export import NavigationLastPage = __MaterialUi.SvgIcon;
    export default NavigationLastPage;
}

declare module 'material-ui/svg-icons/navigation/menu' {
    export import NavigationMenu = __MaterialUi.SvgIcon;
    export default NavigationMenu;
}

declare module 'material-ui/svg-icons/navigation/more-horiz' {
    export import NavigationMoreHoriz = __MaterialUi.SvgIcon;
    export default NavigationMoreHoriz;
}

declare module 'material-ui/svg-icons/navigation/more-vert' {
    export import NavigationMoreVert = __MaterialUi.SvgIcon;
    export default NavigationMoreVert;
}

declare module 'material-ui/svg-icons/navigation/refresh' {
    export import NavigationRefresh = __MaterialUi.SvgIcon;
    export default NavigationRefresh;
}

declare module 'material-ui/svg-icons/navigation/subdirectory-arrow-left' {
    export import NavigationSubdirectoryArrowLeft = __MaterialUi.SvgIcon;
    export default NavigationSubdirectoryArrowLeft;
}

declare module 'material-ui/svg-icons/navigation/subdirectory-arrow-right' {
    export import NavigationSubdirectoryArrowRight = __MaterialUi.SvgIcon;
    export default NavigationSubdirectoryArrowRight;
}

declare module 'material-ui/svg-icons/navigation/unfold-less' {
    export import NavigationUnfoldLess = __MaterialUi.SvgIcon;
    export default NavigationUnfoldLess;
}

declare module 'material-ui/svg-icons/navigation/unfold-more' {
    export import NavigationUnfoldMore = __MaterialUi.SvgIcon;
    export default NavigationUnfoldMore;
}

declare module 'material-ui/svg-icons/notification/adb' {
    export import NotificationAdb = __MaterialUi.SvgIcon;
    export default NotificationAdb;
}

declare module 'material-ui/svg-icons/notification/airline-seat-flat' {
    export import NotificationAirlineSeatFlat = __MaterialUi.SvgIcon;
    export default NotificationAirlineSeatFlat;
}

declare module 'material-ui/svg-icons/notification/airline-seat-flat-angled' {
    export import NotificationAirlineSeatFlatAngled = __MaterialUi.SvgIcon;
    export default NotificationAirlineSeatFlatAngled;
}

declare module 'material-ui/svg-icons/notification/airline-seat-individual-suite' {
    export import NotificationAirlineSeatIndividualSuite = __MaterialUi.SvgIcon;
    export default NotificationAirlineSeatIndividualSuite;
}

declare module 'material-ui/svg-icons/notification/airline-seat-legroom-extra' {
    export import NotificationAirlineSeatLegroomExtra = __MaterialUi.SvgIcon;
    export default NotificationAirlineSeatLegroomExtra;
}

declare module 'material-ui/svg-icons/notification/airline-seat-legroom-normal' {
    export import NotificationAirlineSeatLegroomNormal = __MaterialUi.SvgIcon;
    export default NotificationAirlineSeatLegroomNormal;
}

declare module 'material-ui/svg-icons/notification/airline-seat-legroom-reduced' {
    export import NotificationAirlineSeatLegroomReduced = __MaterialUi.SvgIcon;
    export default NotificationAirlineSeatLegroomReduced;
}

declare module 'material-ui/svg-icons/notification/airline-seat-recline-extra' {
    export import NotificationAirlineSeatReclineExtra = __MaterialUi.SvgIcon;
    export default NotificationAirlineSeatReclineExtra;
}

declare module 'material-ui/svg-icons/notification/airline-seat-recline-normal' {
    export import NotificationAirlineSeatReclineNormal = __MaterialUi.SvgIcon;
    export default NotificationAirlineSeatReclineNormal;
}

declare module 'material-ui/svg-icons/notification/bluetooth-audio' {
    export import NotificationBluetoothAudio = __MaterialUi.SvgIcon;
    export default NotificationBluetoothAudio;
}

declare module 'material-ui/svg-icons/notification/confirmation-number' {
    export import NotificationConfirmationNumber = __MaterialUi.SvgIcon;
    export default NotificationConfirmationNumber;
}

declare module 'material-ui/svg-icons/notification/disc-full' {
    export import NotificationDiscFull = __MaterialUi.SvgIcon;
    export default NotificationDiscFull;
}

declare module 'material-ui/svg-icons/notification/do-not-disturb' {
    export import NotificationDoNotDisturb = __MaterialUi.SvgIcon;
    export default NotificationDoNotDisturb;
}

declare module 'material-ui/svg-icons/notification/do-not-disturb-alt' {
    export import NotificationDoNotDisturbAlt = __MaterialUi.SvgIcon;
    export default NotificationDoNotDisturbAlt;
}

declare module 'material-ui/svg-icons/notification/do-not-disturb-off' {
    export import NotificationDoNotDisturbOff = __MaterialUi.SvgIcon;
    export default NotificationDoNotDisturbOff;
}

declare module 'material-ui/svg-icons/notification/do-not-disturb-on' {
    export import NotificationDoNotDisturbOn = __MaterialUi.SvgIcon;
    export default NotificationDoNotDisturbOn;
}

declare module 'material-ui/svg-icons/notification/drive-eta' {
    export import NotificationDriveEta = __MaterialUi.SvgIcon;
    export default NotificationDriveEta;
}

declare module 'material-ui/svg-icons/notification/enhanced-encryption' {
    export import NotificationEnhancedEncryption = __MaterialUi.SvgIcon;
    export default NotificationEnhancedEncryption;
}

declare module 'material-ui/svg-icons/notification/event-available' {
    export import NotificationEventAvailable = __MaterialUi.SvgIcon;
    export default NotificationEventAvailable;
}

declare module 'material-ui/svg-icons/notification/event-busy' {
    export import NotificationEventBusy = __MaterialUi.SvgIcon;
    export default NotificationEventBusy;
}

declare module 'material-ui/svg-icons/notification/event-note' {
    export import NotificationEventNote = __MaterialUi.SvgIcon;
    export default NotificationEventNote;
}

declare module 'material-ui/svg-icons/notification/folder-special' {
    export import NotificationFolderSpecial = __MaterialUi.SvgIcon;
    export default NotificationFolderSpecial;
}

declare module 'material-ui/svg-icons/notification/live-tv' {
    export import NotificationLiveTv = __MaterialUi.SvgIcon;
    export default NotificationLiveTv;
}

declare module 'material-ui/svg-icons/notification/mms' {
    export import NotificationMms = __MaterialUi.SvgIcon;
    export default NotificationMms;
}

declare module 'material-ui/svg-icons/notification/more' {
    export import NotificationMore = __MaterialUi.SvgIcon;
    export default NotificationMore;
}

declare module 'material-ui/svg-icons/notification/network-check' {
    export import NotificationNetworkCheck = __MaterialUi.SvgIcon;
    export default NotificationNetworkCheck;
}

declare module 'material-ui/svg-icons/notification/network-locked' {
    export import NotificationNetworkLocked = __MaterialUi.SvgIcon;
    export default NotificationNetworkLocked;
}

declare module 'material-ui/svg-icons/notification/no-encryption' {
    export import NotificationNoEncryption = __MaterialUi.SvgIcon;
    export default NotificationNoEncryption;
}

declare module 'material-ui/svg-icons/notification/ondemand-video' {
    export import NotificationOndemandVideo = __MaterialUi.SvgIcon;
    export default NotificationOndemandVideo;
}

declare module 'material-ui/svg-icons/notification/personal-video' {
    export import NotificationPersonalVideo = __MaterialUi.SvgIcon;
    export default NotificationPersonalVideo;
}

declare module 'material-ui/svg-icons/notification/phone-bluetooth-speaker' {
    export import NotificationPhoneBluetoothSpeaker = __MaterialUi.SvgIcon;
    export default NotificationPhoneBluetoothSpeaker;
}

declare module 'material-ui/svg-icons/notification/phone-forwarded' {
    export import NotificationPhoneForwarded = __MaterialUi.SvgIcon;
    export default NotificationPhoneForwarded;
}

declare module 'material-ui/svg-icons/notification/phone-in-talk' {
    export import NotificationPhoneInTalk = __MaterialUi.SvgIcon;
    export default NotificationPhoneInTalk;
}

declare module 'material-ui/svg-icons/notification/phone-locked' {
    export import NotificationPhoneLocked = __MaterialUi.SvgIcon;
    export default NotificationPhoneLocked;
}

declare module 'material-ui/svg-icons/notification/phone-missed' {
    export import NotificationPhoneMissed = __MaterialUi.SvgIcon;
    export default NotificationPhoneMissed;
}

declare module 'material-ui/svg-icons/notification/phone-paused' {
    export import NotificationPhonePaused = __MaterialUi.SvgIcon;
    export default NotificationPhonePaused;
}

declare module 'material-ui/svg-icons/notification/power' {
    export import NotificationPower = __MaterialUi.SvgIcon;
    export default NotificationPower;
}

declare module 'material-ui/svg-icons/notification/priority-high' {
    export import NotificationPriorityHigh = __MaterialUi.SvgIcon;
    export default NotificationPriorityHigh;
}

declare module 'material-ui/svg-icons/notification/rv-hookup' {
    export import NotificationRvHookup = __MaterialUi.SvgIcon;
    export default NotificationRvHookup;
}

declare module 'material-ui/svg-icons/notification/sd-card' {
    export import NotificationSdCard = __MaterialUi.SvgIcon;
    export default NotificationSdCard;
}

declare module 'material-ui/svg-icons/notification/sim-card-alert' {
    export import NotificationSimCardAlert = __MaterialUi.SvgIcon;
    export default NotificationSimCardAlert;
}

declare module 'material-ui/svg-icons/notification/sms' {
    export import NotificationSms = __MaterialUi.SvgIcon;
    export default NotificationSms;
}

declare module 'material-ui/svg-icons/notification/sms-failed' {
    export import NotificationSmsFailed = __MaterialUi.SvgIcon;
    export default NotificationSmsFailed;
}

declare module 'material-ui/svg-icons/notification/sync' {
    export import NotificationSync = __MaterialUi.SvgIcon;
    export default NotificationSync;
}

declare module 'material-ui/svg-icons/notification/sync-disabled' {
    export import NotificationSyncDisabled = __MaterialUi.SvgIcon;
    export default NotificationSyncDisabled;
}

declare module 'material-ui/svg-icons/notification/sync-problem' {
    export import NotificationSyncProblem = __MaterialUi.SvgIcon;
    export default NotificationSyncProblem;
}

declare module 'material-ui/svg-icons/notification/system-update' {
    export import NotificationSystemUpdate = __MaterialUi.SvgIcon;
    export default NotificationSystemUpdate;
}

declare module 'material-ui/svg-icons/notification/tap-and-play' {
    export import NotificationTapAndPlay = __MaterialUi.SvgIcon;
    export default NotificationTapAndPlay;
}

declare module 'material-ui/svg-icons/notification/time-to-leave' {
    export import NotificationTimeToLeave = __MaterialUi.SvgIcon;
    export default NotificationTimeToLeave;
}

declare module 'material-ui/svg-icons/notification/vibration' {
    export import NotificationVibration = __MaterialUi.SvgIcon;
    export default NotificationVibration;
}

declare module 'material-ui/svg-icons/notification/voice-chat' {
    export import NotificationVoiceChat = __MaterialUi.SvgIcon;
    export default NotificationVoiceChat;
}

declare module 'material-ui/svg-icons/notification/vpn-lock' {
    export import NotificationVpnLock = __MaterialUi.SvgIcon;
    export default NotificationVpnLock;
}

declare module 'material-ui/svg-icons/notification/wc' {
    export import NotificationWc = __MaterialUi.SvgIcon;
    export default NotificationWc;
}

declare module 'material-ui/svg-icons/notification/wifi' {
    export import NotificationWifi = __MaterialUi.SvgIcon;
    export default NotificationWifi;
}

declare module 'material-ui/svg-icons/places/ac-unit' {
    export import PlacesAcUnit = __MaterialUi.SvgIcon;
    export default PlacesAcUnit;
}

declare module 'material-ui/svg-icons/places/airport-shuttle' {
    export import PlacesAirportShuttle = __MaterialUi.SvgIcon;
    export default PlacesAirportShuttle;
}

declare module 'material-ui/svg-icons/places/all-inclusive' {
    export import PlacesAllInclusive = __MaterialUi.SvgIcon;
    export default PlacesAllInclusive;
}

declare module 'material-ui/svg-icons/places/beach-access' {
    export import PlacesBeachAccess = __MaterialUi.SvgIcon;
    export default PlacesBeachAccess;
}

declare module 'material-ui/svg-icons/places/business-center' {
    export import PlacesBusinessCenter = __MaterialUi.SvgIcon;
    export default PlacesBusinessCenter;
}

declare module 'material-ui/svg-icons/places/casino' {
    export import PlacesCasino = __MaterialUi.SvgIcon;
    export default PlacesCasino;
}

declare module 'material-ui/svg-icons/places/child-care' {
    export import PlacesChildCare = __MaterialUi.SvgIcon;
    export default PlacesChildCare;
}

declare module 'material-ui/svg-icons/places/child-friendly' {
    export import PlacesChildFriendly = __MaterialUi.SvgIcon;
    export default PlacesChildFriendly;
}

declare module 'material-ui/svg-icons/places/fitness-center' {
    export import PlacesFitnessCenter = __MaterialUi.SvgIcon;
    export default PlacesFitnessCenter;
}

declare module 'material-ui/svg-icons/places/free-breakfast' {
    export import PlacesFreeBreakfast = __MaterialUi.SvgIcon;
    export default PlacesFreeBreakfast;
}

declare module 'material-ui/svg-icons/places/golf-course' {
    export import PlacesGolfCourse = __MaterialUi.SvgIcon;
    export default PlacesGolfCourse;
}

declare module 'material-ui/svg-icons/places/hot-tub' {
    export import PlacesHotTub = __MaterialUi.SvgIcon;
    export default PlacesHotTub;
}

declare module 'material-ui/svg-icons/places/kitchen' {
    export import PlacesKitchen = __MaterialUi.SvgIcon;
    export default PlacesKitchen;
}

declare module 'material-ui/svg-icons/places/pool' {
    export import PlacesPool = __MaterialUi.SvgIcon;
    export default PlacesPool;
}

declare module 'material-ui/svg-icons/places/room-service' {
    export import PlacesRoomService = __MaterialUi.SvgIcon;
    export default PlacesRoomService;
}

declare module 'material-ui/svg-icons/places/rv-hookup' {
    export import PlacesRvHookup = __MaterialUi.SvgIcon;
    export default PlacesRvHookup;
}

declare module 'material-ui/svg-icons/places/smoke-free' {
    export import PlacesSmokeFree = __MaterialUi.SvgIcon;
    export default PlacesSmokeFree;
}

declare module 'material-ui/svg-icons/places/smoking-rooms' {
    export import PlacesSmokingRooms = __MaterialUi.SvgIcon;
    export default PlacesSmokingRooms;
}

declare module 'material-ui/svg-icons/places/spa' {
    export import PlacesSpa = __MaterialUi.SvgIcon;
    export default PlacesSpa;
}

declare module 'material-ui/svg-icons/social/cake' {
    export import SocialCake = __MaterialUi.SvgIcon;
    export default SocialCake;
}

declare module 'material-ui/svg-icons/social/domain' {
    export import SocialDomain = __MaterialUi.SvgIcon;
    export default SocialDomain;
}

declare module 'material-ui/svg-icons/social/group' {
    export import SocialGroup = __MaterialUi.SvgIcon;
    export default SocialGroup;
}

declare module 'material-ui/svg-icons/social/group-add' {
    export import SocialGroupAdd = __MaterialUi.SvgIcon;
    export default SocialGroupAdd;
}

declare module 'material-ui/svg-icons/social/location-city' {
    export import SocialLocationCity = __MaterialUi.SvgIcon;
    export default SocialLocationCity;
}

declare module 'material-ui/svg-icons/social/mood' {
    export import SocialMood = __MaterialUi.SvgIcon;
    export default SocialMood;
}

declare module 'material-ui/svg-icons/social/mood-bad' {
    export import SocialMoodBad = __MaterialUi.SvgIcon;
    export default SocialMoodBad;
}

declare module 'material-ui/svg-icons/social/notifications' {
    export import SocialNotifications = __MaterialUi.SvgIcon;
    export default SocialNotifications;
}

declare module 'material-ui/svg-icons/social/notifications-active' {
    export import SocialNotificationsActive = __MaterialUi.SvgIcon;
    export default SocialNotificationsActive;
}

declare module 'material-ui/svg-icons/social/notifications-none' {
    export import SocialNotificationsNone = __MaterialUi.SvgIcon;
    export default SocialNotificationsNone;
}

declare module 'material-ui/svg-icons/social/notifications-off' {
    export import SocialNotificationsOff = __MaterialUi.SvgIcon;
    export default SocialNotificationsOff;
}

declare module 'material-ui/svg-icons/social/notifications-paused' {
    export import SocialNotificationsPaused = __MaterialUi.SvgIcon;
    export default SocialNotificationsPaused;
}

declare module 'material-ui/svg-icons/social/pages' {
    export import SocialPages = __MaterialUi.SvgIcon;
    export default SocialPages;
}

declare module 'material-ui/svg-icons/social/party-mode' {
    export import SocialPartyMode = __MaterialUi.SvgIcon;
    export default SocialPartyMode;
}

declare module 'material-ui/svg-icons/social/people' {
    export import SocialPeople = __MaterialUi.SvgIcon;
    export default SocialPeople;
}

declare module 'material-ui/svg-icons/social/people-outline' {
    export import SocialPeopleOutline = __MaterialUi.SvgIcon;
    export default SocialPeopleOutline;
}

declare module 'material-ui/svg-icons/social/person' {
    export import SocialPerson = __MaterialUi.SvgIcon;
    export default SocialPerson;
}

declare module 'material-ui/svg-icons/social/person-add' {
    export import SocialPersonAdd = __MaterialUi.SvgIcon;
    export default SocialPersonAdd;
}

declare module 'material-ui/svg-icons/social/person-outline' {
    export import SocialPersonOutline = __MaterialUi.SvgIcon;
    export default SocialPersonOutline;
}

declare module 'material-ui/svg-icons/social/plus-one' {
    export import SocialPlusOne = __MaterialUi.SvgIcon;
    export default SocialPlusOne;
}

declare module 'material-ui/svg-icons/social/poll' {
    export import SocialPoll = __MaterialUi.SvgIcon;
    export default SocialPoll;
}

declare module 'material-ui/svg-icons/social/public' {
    export import SocialPublic = __MaterialUi.SvgIcon;
    export default SocialPublic;
}

declare module 'material-ui/svg-icons/social/school' {
    export import SocialSchool = __MaterialUi.SvgIcon;
    export default SocialSchool;
}

declare module 'material-ui/svg-icons/social/sentiment-dissatisfied' {
    export import SocialSentimentDissatisfied = __MaterialUi.SvgIcon;
    export default SocialSentimentDissatisfied;
}

declare module 'material-ui/svg-icons/social/sentiment-neutral' {
    export import SocialSentimentNeutral = __MaterialUi.SvgIcon;
    export default SocialSentimentNeutral;
}

declare module 'material-ui/svg-icons/social/sentiment-satisfied' {
    export import SocialSentimentSatisfied = __MaterialUi.SvgIcon;
    export default SocialSentimentSatisfied;
}

declare module 'material-ui/svg-icons/social/sentiment-very-dissatisfied' {
    export import SocialSentimentVeryDissatisfied = __MaterialUi.SvgIcon;
    export default SocialSentimentVeryDissatisfied;
}

declare module 'material-ui/svg-icons/social/sentiment-very-satisfied' {
    export import SocialSentimentVerySatisfied = __MaterialUi.SvgIcon;
    export default SocialSentimentVerySatisfied;
}

declare module 'material-ui/svg-icons/social/share' {
    export import SocialShare = __MaterialUi.SvgIcon;
    export default SocialShare;
}

declare module 'material-ui/svg-icons/social/whatshot' {
    export import SocialWhatshot = __MaterialUi.SvgIcon;
    export default SocialWhatshot;
}

declare module 'material-ui/svg-icons/toggle/check-box' {
    export import ToggleCheckBox = __MaterialUi.SvgIcon;
    export default ToggleCheckBox;
}

declare module 'material-ui/svg-icons/toggle/check-box-outline-blank' {
    export import ToggleCheckBoxOutlineBlank = __MaterialUi.SvgIcon;
    export default ToggleCheckBoxOutlineBlank;
}

declare module 'material-ui/svg-icons/toggle/indeterminate-check-box' {
    export import ToggleIndeterminateCheckBox = __MaterialUi.SvgIcon;
    export default ToggleIndeterminateCheckBox;
}

declare module 'material-ui/svg-icons/toggle/radio-button-checked' {
    export import ToggleRadioButtonChecked = __MaterialUi.SvgIcon;
    export default ToggleRadioButtonChecked;
}

declare module 'material-ui/svg-icons/toggle/radio-button-unchecked' {
    export import ToggleRadioButtonUnchecked = __MaterialUi.SvgIcon;
    export default ToggleRadioButtonUnchecked;
}

declare module 'material-ui/svg-icons/toggle/star' {
    export import ToggleStar = __MaterialUi.SvgIcon;
    export default ToggleStar;
}

declare module 'material-ui/svg-icons/toggle/star-border' {
    export import ToggleStarBorder = __MaterialUi.SvgIcon;
    export default ToggleStarBorder;
}

declare module 'material-ui/svg-icons/toggle/star-half' {
    export import ToggleStarHalf = __MaterialUi.SvgIcon;
    export default ToggleStarHalf;
}
// }}}

declare module 'material-ui/svg-icons/navigation-arrow-drop-right' {
    export import NavigationArrowDropRight = __MaterialUi.SvgIcon;
    export default NavigationArrowDropRight;
}

declare module 'material-ui/styles' {
    export import MuiThemeProvider = __MaterialUi.Styles.MuiThemeProvider;
    export import colors = __MaterialUi.Styles.Colors;
    export import darkBaseTheme = __MaterialUi.Styles.darkBaseTheme;
    export import DarkRawTheme = __MaterialUi.Styles.darkBaseTheme;
    export import lightBaseTheme = __MaterialUi.Styles.lightBaseTheme;
    export import LightRawTheme = __MaterialUi.Styles.lightBaseTheme;
    export import getMuiTheme = __MaterialUi.Styles.getMuiTheme;
    export import spacing = __MaterialUi.Styles.Spacing;
    export import transitions = __MaterialUi.Styles.Transitions;
    export import typography = __MaterialUi.Styles.Typography;
    export import zIndex = __MaterialUi.Styles.zIndex;

    export type MuiTheme = __MaterialUi.Styles.MuiTheme;
}

declare module 'material-ui/styles/getMuiTheme' {
    export import getMuiTheme = __MaterialUi.Styles.getMuiTheme;
    export default getMuiTheme;
}

declare module 'material-ui/styles/muiThemeable' {
    export import muiThemeable = __MaterialUi.Styles.muiThemeable;
    export default muiThemeable;
}

declare module 'material-ui/styles/MuiThemeProvider' {
    export import MuiThemeProvider = __MaterialUi.Styles.MuiThemeProvider;
    export default MuiThemeProvider;
}

declare module 'material-ui/styles/spacing' {
    type Spacing = __MaterialUi.Styles.Spacing;
    let Spacing: Spacing;
    export default Spacing;
}

declare module 'material-ui/styles/transitions' {
    export import Transitions = __MaterialUi.Styles.Transitions;
    export default Transitions;
}

declare module 'material-ui/styles/typography' {
    export import Typography = __MaterialUi.Styles.Typography;
    export default Typography;
}

declare module 'material-ui/styles/baseThemes/lightBaseTheme' {
    export import lightBaseTheme = __MaterialUi.Styles.lightBaseTheme;
    export default lightBaseTheme;
}

declare module 'material-ui/styles/baseThemes/darkBaseTheme' {
    export import darkBaseTheme = __MaterialUi.Styles.darkBaseTheme;
    export default darkBaseTheme;
}

declare module 'material-ui/styles/zIndex' {
    export import zIndex = __MaterialUi.Styles.zIndex;
    export default zIndex;
}

declare module "material-ui/styles/colors" {
    export const red50: string;
    export const red100: string;
    export const red200: string;
    export const red300: string;
    export const red400: string;
    export const red500: string;
    export const red600: string;
    export const red700: string;
    export const red800: string;
    export const red900: string;
    export const redA100: string;
    export const redA200: string;
    export const redA400: string;
    export const redA700: string;

    export const pink50: string;
    export const pink100: string;
    export const pink200: string;
    export const pink300: string;
    export const pink400: string;
    export const pink500: string;
    export const pink600: string;
    export const pink700: string;
    export const pink800: string;
    export const pink900: string;
    export const pinkA100: string;
    export const pinkA200: string;
    export const pinkA400: string;
    export const pinkA700: string;

    export const purple50: string;
    export const purple100: string;
    export const purple200: string;
    export const purple300: string;
    export const purple400: string;
    export const purple500: string;
    export const purple600: string;
    export const purple700: string;
    export const purple800: string;
    export const purple900: string;
    export const purpleA100: string;
    export const purpleA200: string;
    export const purpleA400: string;
    export const purpleA700: string;

    export const deepPurple50: string;
    export const deepPurple100: string;
    export const deepPurple200: string;
    export const deepPurple300: string;
    export const deepPurple400: string;
    export const deepPurple500: string;
    export const deepPurple600: string;
    export const deepPurple700: string;
    export const deepPurple800: string;
    export const deepPurple900: string;
    export const deepPurpleA100: string;
    export const deepPurpleA200: string;
    export const deepPurpleA400: string;
    export const deepPurpleA700: string;

    export const indigo50: string;
    export const indigo100: string;
    export const indigo200: string;
    export const indigo300: string;
    export const indigo400: string;
    export const indigo500: string;
    export const indigo600: string;
    export const indigo700: string;
    export const indigo800: string;
    export const indigo900: string;
    export const indigoA100: string;
    export const indigoA200: string;
    export const indigoA400: string;
    export const indigoA700: string;

    export const blue50: string;
    export const blue100: string;
    export const blue200: string;
    export const blue300: string;
    export const blue400: string;
    export const blue500: string;
    export const blue600: string;
    export const blue700: string;
    export const blue800: string;
    export const blue900: string;
    export const blueA100: string;
    export const blueA200: string;
    export const blueA400: string;
    export const blueA700: string;

    export const lightBlue50: string;
    export const lightBlue100: string;
    export const lightBlue200: string;
    export const lightBlue300: string;
    export const lightBlue400: string;
    export const lightBlue500: string;
    export const lightBlue600: string;
    export const lightBlue700: string;
    export const lightBlue800: string;
    export const lightBlue900: string;
    export const lightBlueA100: string;
    export const lightBlueA200: string;
    export const lightBlueA400: string;
    export const lightBlueA700: string;

    export const cyan50: string;
    export const cyan100: string;
    export const cyan200: string;
    export const cyan300: string;
    export const cyan400: string;
    export const cyan500: string;
    export const cyan600: string;
    export const cyan700: string;
    export const cyan800: string;
    export const cyan900: string;
    export const cyanA100: string;
    export const cyanA200: string;
    export const cyanA400: string;
    export const cyanA700: string;

    export const teal50: string;
    export const teal100: string;
    export const teal200: string;
    export const teal300: string;
    export const teal400: string;
    export const teal500: string;
    export const teal600: string;
    export const teal700: string;
    export const teal800: string;
    export const teal900: string;
    export const tealA100: string;
    export const tealA200: string;
    export const tealA400: string;
    export const tealA700: string;

    export const green50: string;
    export const green100: string;
    export const green200: string;
    export const green300: string;
    export const green400: string;
    export const green500: string;
    export const green600: string;
    export const green700: string;
    export const green800: string;
    export const green900: string;
    export const greenA100: string;
    export const greenA200: string;
    export const greenA400: string;
    export const greenA700: string;

    export const lightGreen50: string;
    export const lightGreen100: string;
    export const lightGreen200: string;
    export const lightGreen300: string;
    export const lightGreen400: string;
    export const lightGreen500: string;
    export const lightGreen600: string;
    export const lightGreen700: string;
    export const lightGreen800: string;
    export const lightGreen900: string;
    export const lightGreenA100: string;
    export const lightGreenA200: string;
    export const lightGreenA400: string;
    export const lightGreenA700: string;

    export const lime50: string;
    export const lime100: string;
    export const lime200: string;
    export const lime300: string;
    export const lime400: string;
    export const lime500: string;
    export const lime600: string;
    export const lime700: string;
    export const lime800: string;
    export const lime900: string;
    export const limeA100: string;
    export const limeA200: string;
    export const limeA400: string;
    export const limeA700: string;

    export const yellow50: string;
    export const yellow100: string;
    export const yellow200: string;
    export const yellow300: string;
    export const yellow400: string;
    export const yellow500: string;
    export const yellow600: string;
    export const yellow700: string;
    export const yellow800: string;
    export const yellow900: string;
    export const yellowA100: string;
    export const yellowA200: string;
    export const yellowA400: string;
    export const yellowA700: string;

    export const amber50: string;
    export const amber100: string;
    export const amber200: string;
    export const amber300: string;
    export const amber400: string;
    export const amber500: string;
    export const amber600: string;
    export const amber700: string;
    export const amber800: string;
    export const amber900: string;
    export const amberA100: string;
    export const amberA200: string;
    export const amberA400: string;
    export const amberA700: string;

    export const orange50: string;
    export const orange100: string;
    export const orange200: string;
    export const orange300: string;
    export const orange400: string;
    export const orange500: string;
    export const orange600: string;
    export const orange700: string;
    export const orange800: string;
    export const orange900: string;
    export const orangeA100: string;
    export const orangeA200: string;
    export const orangeA400: string;
    export const orangeA700: string;

    export const deepOrange50: string;
    export const deepOrange100: string;
    export const deepOrange200: string;
    export const deepOrange300: string;
    export const deepOrange400: string;
    export const deepOrange500: string;
    export const deepOrange600: string;
    export const deepOrange700: string;
    export const deepOrange800: string;
    export const deepOrange900: string;
    export const deepOrangeA100: string;
    export const deepOrangeA200: string;
    export const deepOrangeA400: string;
    export const deepOrangeA700: string;

    export const brown50: string;
    export const brown100: string;
    export const brown200: string;
    export const brown300: string;
    export const brown400: string;
    export const brown500: string;
    export const brown600: string;
    export const brown700: string;
    export const brown800: string;
    export const brown900: string;

    export const blueGrey50: string;
    export const blueGrey100: string;
    export const blueGrey200: string;
    export const blueGrey300: string;
    export const blueGrey400: string;
    export const blueGrey500: string;
    export const blueGrey600: string;
    export const blueGrey700: string;
    export const blueGrey800: string;
    export const blueGrey900: string;

    export const grey50: string;
    export const grey100: string;
    export const grey200: string;
    export const grey300: string;
    export const grey400: string;
    export const grey500: string;
    export const grey600: string;
    export const grey700: string;
    export const grey800: string;
    export const grey900: string;

    export const black: string;
    export const white: string;

    export const transparent: string;
    export const fullBlack: string;
    export const darkBlack: string;
    export const lightBlack: string;
    export const minBlack: string;
    export const faintBlack: string;
    export const fullWhite: string;
    export const darkWhite: string;
    export const lightWhite: string;
}

declare module 'material-ui/Table' {
    export import Table = __MaterialUi.Table.Table;
    export import TableBody = __MaterialUi.Table.TableBody;
    export import TableFooter = __MaterialUi.Table.TableFooter;
    export import TableHeader = __MaterialUi.Table.TableHeader;
    export import TableHeaderColumn = __MaterialUi.Table.TableHeaderColumn;
    export import TableRow = __MaterialUi.Table.TableRow;
    export import TableRowColumn = __MaterialUi.Table.TableRowColumn;
    export default Table;
}

declare module 'material-ui/Table/Table' {
    export import Table = __MaterialUi.Table.Table;
    export default Table;
}

declare module 'material-ui/Table/TableBody' {
    export import TableBody = __MaterialUi.Table.TableBody;
    export default TableBody;
}

declare module 'material-ui/Table/TableFooter' {
    export import TableFooter = __MaterialUi.Table.TableFooter;
    export default TableFooter;
}

declare module 'material-ui/Table/TableHeader' {
    export import TableHeader = __MaterialUi.Table.TableHeader;
    export default TableHeader;
}

declare module 'material-ui/Table/TableHeaderColumn' {
    export import TableHeaderColumn = __MaterialUi.Table.TableHeaderColumn;
    export default TableHeaderColumn;
}

declare module 'material-ui/Table/TableRow' {
    export import TableRow = __MaterialUi.Table.TableRow;
    export default TableRow;
}

declare module 'material-ui/Table/TableRowColumn' {
    export import TableRowColumn = __MaterialUi.Table.TableRowColumn;
    export default TableRowColumn;
}

declare module 'material-ui/Tabs' {
    export import Tab = __MaterialUi.Tabs.Tab;
    export import Tabs = __MaterialUi.Tabs.Tabs;
    export default Tabs;
}

declare module 'material-ui/Tabs/Tab' {
    export import Tab = __MaterialUi.Tabs.Tab;
    export default Tab;
}

declare module 'material-ui/Tabs/Tabs' {
    export import Tabs = __MaterialUi.Tabs.Tabs;
    export default Tabs;
}

declare module 'material-ui/TextField' {
    export import TextField = __MaterialUi.TextField;
    export default TextField;
}

declare module 'material-ui/TimePicker' {
    export import TimePicker = __MaterialUi.TimePicker;
    export default TimePicker;
}

declare module 'material-ui/Toggle' {
    export import Toggle = __MaterialUi.Switches.Toggle;
    export default Toggle;
}

declare module 'material-ui/Toolbar' {
    export import Toolbar = __MaterialUi.Toolbar.Toolbar;
    export import ToolbarGroup = __MaterialUi.Toolbar.ToolbarGroup;
    export import ToolbarSeparator = __MaterialUi.Toolbar.ToolbarSeparator;
    export import ToolbarTitle = __MaterialUi.Toolbar.ToolbarTitle;
    export default Toolbar;
}

declare module 'material-ui/Toolbar/Toolbar' {
    export import Toolbar = __MaterialUi.Toolbar.Toolbar;
    export default Toolbar;
}

declare module 'material-ui/Toolbar/ToolbarGroup' {
    export import ToolbarGroup = __MaterialUi.Toolbar.ToolbarGroup;
    export default ToolbarGroup;
}

declare module 'material-ui/Toolbar/ToolbarSeparator' {
    export import ToolbarSeparator = __MaterialUi.Toolbar.ToolbarSeparator;
    export default ToolbarSeparator;
}

declare module 'material-ui/Toolbar/ToolbarTitle' {
    export import ToolbarTitle = __MaterialUi.Toolbar.ToolbarTitle;
    export default ToolbarTitle;
}

declare module 'material-ui/utils/colorManipulator' {
    export import convertColorToString = __MaterialUi.Utils.ColorManipulator.convertColorToString;
    export import convertHexToRGB = __MaterialUi.Utils.ColorManipulator.convertHexToRGB;
    export import decomposeColor = __MaterialUi.Utils.ColorManipulator.decomposeColor;
    export import getContrastRatio = __MaterialUi.Utils.ColorManipulator.getContrastRatio;
    export import getLuminance = __MaterialUi.Utils.ColorManipulator.getLuminance;
    export import emphasize = __MaterialUi.Utils.ColorManipulator.emphasize;
    export import fade = __MaterialUi.Utils.ColorManipulator.fade;
    export import darken = __MaterialUi.Utils.ColorManipulator.darken;
    export import lighten = __MaterialUi.Utils.ColorManipulator.lighten;
}
declare module 'material-ui/utils/dom' {
    export import Dom = __MaterialUi.Utils.Dom;
    export default Dom;
}
declare module 'material-ui/utils/events' {
    export import Events = __MaterialUi.Utils.Events;
    export default Events;
}
declare module 'material-ui/utils/withWidth' {
    export const SMALL: number;
    export const MEDIUM: number;
    export const LARGE: number;

    interface Options {
        largeWidth?: number;
        mediumWidth?: number;
        resizeInterval?: number;
    }
    export default function withWidth<C extends Function>(options?: Options): (component: C) => C;
}

declare namespace __MaterialUi.Styles {
    interface Colors {
        red50: string;
        red100: string;
        red200: string;
        red300: string;
        red400: string;
        red500: string;
        red600: string;
        red700: string;
        red800: string;
        red900: string;
        redA100: string;
        redA200: string;
        redA400: string;
        redA700: string;

        pink50: string;
        pink100: string;
        pink200: string;
        pink300: string;
        pink400: string;
        pink500: string;
        pink600: string;
        pink700: string;
        pink800: string;
        pink900: string;
        pinkA100: string;
        pinkA200: string;
        pinkA400: string;
        pinkA700: string;

        purple50: string;
        purple100: string;
        purple200: string;
        purple300: string;
        purple400: string;
        purple500: string;
        purple600: string;
        purple700: string;
        purple800: string;
        purple900: string;
        purpleA100: string;
        purpleA200: string;
        purpleA400: string;
        purpleA700: string;

        deepPurple50: string;
        deepPurple100: string;
        deepPurple200: string;
        deepPurple300: string;
        deepPurple400: string;
        deepPurple500: string;
        deepPurple600: string;
        deepPurple700: string;
        deepPurple800: string;
        deepPurple900: string;
        deepPurpleA100: string;
        deepPurpleA200: string;
        deepPurpleA400: string;
        deepPurpleA700: string;

        indigo50: string;
        indigo100: string;
        indigo200: string;
        indigo300: string;
        indigo400: string;
        indigo500: string;
        indigo600: string;
        indigo700: string;
        indigo800: string;
        indigo900: string;
        indigoA100: string;
        indigoA200: string;
        indigoA400: string;
        indigoA700: string;

        blue50: string;
        blue100: string;
        blue200: string;
        blue300: string;
        blue400: string;
        blue500: string;
        blue600: string;
        blue700: string;
        blue800: string;
        blue900: string;
        blueA100: string;
        blueA200: string;
        blueA400: string;
        blueA700: string;

        lightBlue50: string;
        lightBlue100: string;
        lightBlue200: string;
        lightBlue300: string;
        lightBlue400: string;
        lightBlue500: string;
        lightBlue600: string;
        lightBlue700: string;
        lightBlue800: string;
        lightBlue900: string;
        lightBlueA100: string;
        lightBlueA200: string;
        lightBlueA400: string;
        lightBlueA700: string;

        cyan50: string;
        cyan100: string;
        cyan200: string;
        cyan300: string;
        cyan400: string;
        cyan500: string;
        cyan600: string;
        cyan700: string;
        cyan800: string;
        cyan900: string;
        cyanA100: string;
        cyanA200: string;
        cyanA400: string;
        cyanA700: string;

        teal50: string;
        teal100: string;
        teal200: string;
        teal300: string;
        teal400: string;
        teal500: string;
        teal600: string;
        teal700: string;
        teal800: string;
        teal900: string;
        tealA100: string;
        tealA200: string;
        tealA400: string;
        tealA700: string;

        green50: string;
        green100: string;
        green200: string;
        green300: string;
        green400: string;
        green500: string;
        green600: string;
        green700: string;
        green800: string;
        green900: string;
        greenA100: string;
        greenA200: string;
        greenA400: string;
        greenA700: string;

        lightGreen50: string;
        lightGreen100: string;
        lightGreen200: string;
        lightGreen300: string;
        lightGreen400: string;
        lightGreen500: string;
        lightGreen600: string;
        lightGreen700: string;
        lightGreen800: string;
        lightGreen900: string;
        lightGreenA100: string;
        lightGreenA200: string;
        lightGreenA400: string;
        lightGreenA700: string;

        lime50: string;
        lime100: string;
        lime200: string;
        lime300: string;
        lime400: string;
        lime500: string;
        lime600: string;
        lime700: string;
        lime800: string;
        lime900: string;
        limeA100: string;
        limeA200: string;
        limeA400: string;
        limeA700: string;

        yellow50: string;
        yellow100: string;
        yellow200: string;
        yellow300: string;
        yellow400: string;
        yellow500: string;
        yellow600: string;
        yellow700: string;
        yellow800: string;
        yellow900: string;
        yellowA100: string;
        yellowA200: string;
        yellowA400: string;
        yellowA700: string;

        amber50: string;
        amber100: string;
        amber200: string;
        amber300: string;
        amber400: string;
        amber500: string;
        amber600: string;
        amber700: string;
        amber800: string;
        amber900: string;
        amberA100: string;
        amberA200: string;
        amberA400: string;
        amberA700: string;

        orange50: string;
        orange100: string;
        orange200: string;
        orange300: string;
        orange400: string;
        orange500: string;
        orange600: string;
        orange700: string;
        orange800: string;
        orange900: string;
        orangeA100: string;
        orangeA200: string;
        orangeA400: string;
        orangeA700: string;

        deepOrange50: string;
        deepOrange100: string;
        deepOrange200: string;
        deepOrange300: string;
        deepOrange400: string;
        deepOrange500: string;
        deepOrange600: string;
        deepOrange700: string;
        deepOrange800: string;
        deepOrange900: string;
        deepOrangeA100: string;
        deepOrangeA200: string;
        deepOrangeA400: string;
        deepOrangeA700: string;

        brown50: string;
        brown100: string;
        brown200: string;
        brown300: string;
        brown400: string;
        brown500: string;
        brown600: string;
        brown700: string;
        brown800: string;
        brown900: string;

        blueGrey50: string;
        blueGrey100: string;
        blueGrey200: string;
        blueGrey300: string;
        blueGrey400: string;
        blueGrey500: string;
        blueGrey600: string;
        blueGrey700: string;
        blueGrey800: string;
        blueGrey900: string;

        grey50: string;
        grey100: string;
        grey200: string;
        grey300: string;
        grey400: string;
        grey500: string;
        grey600: string;
        grey700: string;
        grey800: string;
        grey900: string;

        black: string;
        white: string;

        transparent: string;
        fullBlack: string;
        darkBlack: string;
        lightBlack: string;
        minBlack: string;
        faintBlack: string;
        fullWhite: string;
        darkWhite: string;
        lightWhite: string;
    }
    export let Colors: Colors;
}

declare module 'material-ui/svg-icons' {
// DO NOT EDIT
// This code is generated by scripts/material-ui/generate.js
// {{{
    export import ActionAccessibility = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/accessibility');
    export import ActionAccessible = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/accessible');
    export import ActionAccountBalance = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/account-balance');
    export import ActionAccountBalanceWallet = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/account-balance-wallet');
    export import ActionAccountBox = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/account-box');
    export import ActionAccountCircle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/account-circle');
    export import ActionAddShoppingCart = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/add-shopping-cart');
    export import ActionAlarm = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/alarm');
    export import ActionAlarmAdd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/alarm-add');
    export import ActionAlarmOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/alarm-off');
    export import ActionAlarmOn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/alarm-on');
    export import ActionAllOut = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/all-out');
    export import ActionAndroid = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/android');
    export import ActionAnnouncement = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/announcement');
    export import ActionAspectRatio = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/aspect-ratio');
    export import ActionAssessment = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/assessment');
    export import ActionAssignment = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/assignment');
    export import ActionAssignmentInd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/assignment-ind');
    export import ActionAssignmentLate = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/assignment-late');
    export import ActionAssignmentReturn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/assignment-return');
    export import ActionAssignmentReturned = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/assignment-returned');
    export import ActionAssignmentTurnedIn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/assignment-turned-in');
    export import ActionAutorenew = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/autorenew');
    export import ActionBackup = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/backup');
    export import ActionBook = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/book');
    export import ActionBookmark = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/bookmark');
    export import ActionBookmarkBorder = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/bookmark-border');
    export import ActionBugReport = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/bug-report');
    export import ActionBuild = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/build');
    export import ActionCached = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/cached');
    export import ActionCameraEnhance = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/camera-enhance');
    export import ActionCardGiftcard = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/card-giftcard');
    export import ActionCardMembership = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/card-membership');
    export import ActionCardTravel = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/card-travel');
    export import ActionChangeHistory = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/change-history');
    export import ActionCheckCircle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/check-circle');
    export import ActionChromeReaderMode = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/chrome-reader-mode');
    export import ActionClass = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/class');
    export import ActionCode = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/code');
    export import ActionCompareArrows = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/compare-arrows');
    export import ActionCopyright = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/copyright');
    export import ActionCreditCard = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/credit-card');
    export import ActionDashboard = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/dashboard');
    export import ActionDateRange = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/date-range');
    export import ActionDelete = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/delete');
    export import ActionDeleteForever = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/delete-forever');
    export import ActionDescription = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/description');
    export import ActionDns = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/dns');
    export import ActionDone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/done');
    export import ActionDoneAll = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/done-all');
    export import ActionDonutLarge = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/donut-large');
    export import ActionDonutSmall = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/donut-small');
    export import ActionEject = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/eject');
    export import ActionEuroSymbol = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/euro-symbol');
    export import ActionEvent = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/event');
    export import ActionEventSeat = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/event-seat');
    export import ActionExitToApp = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/exit-to-app');
    export import ActionExplore = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/explore');
    export import ActionExtension = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/extension');
    export import ActionFace = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/face');
    export import ActionFavorite = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/favorite');
    export import ActionFavoriteBorder = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/favorite-border');
    export import ActionFeedback = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/feedback');
    export import ActionFindInPage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/find-in-page');
    export import ActionFindReplace = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/find-replace');
    export import ActionFingerprint = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/fingerprint');
    export import ActionFlightLand = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/flight-land');
    export import ActionFlightTakeoff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/flight-takeoff');
    export import ActionFlipToBack = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/flip-to-back');
    export import ActionFlipToFront = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/flip-to-front');
    export import ActionGTranslate = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/g-translate');
    export import ActionGavel = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/gavel');
    export import ActionGetApp = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/get-app');
    export import ActionGif = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/gif');
    export import ActionGrade = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/grade');
    export import ActionGroupWork = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/group-work');
    export import ActionHelp = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/help');
    export import ActionHelpOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/help-outline');
    export import ActionHighlightOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/highlight-off');
    export import ActionHistory = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/history');
    export import ActionHome = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/home');
    export import ActionHourglassEmpty = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/hourglass-empty');
    export import ActionHourglassFull = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/hourglass-full');
    export import ActionHttp = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/http');
    export import ActionHttps = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/https');
    export import ActionImportantDevices = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/important-devices');
    export import ActionInfo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/info');
    export import ActionInfoOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/info-outline');
    export import ActionInput = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/input');
    export import ActionInvertColors = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/invert-colors');
    export import ActionLabel = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/label');
    export import ActionLabelOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/label-outline');
    export import ActionLanguage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/language');
    export import ActionLaunch = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/launch');
    export import ActionLightbulbOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/lightbulb-outline');
    export import ActionLineStyle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/line-style');
    export import ActionLineWeight = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/line-weight');
    export import ActionList = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/list');
    export import ActionLock = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/lock');
    export import ActionLockOpen = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/lock-open');
    export import ActionLockOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/lock-outline');
    export import ActionLoyalty = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/loyalty');
    export import ActionMarkunreadMailbox = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/markunread-mailbox');
    export import ActionMotorcycle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/motorcycle');
    export import ActionNoteAdd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/note-add');
    export import ActionOfflinePin = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/offline-pin');
    export import ActionOpacity = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/opacity');
    export import ActionOpenInBrowser = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/open-in-browser');
    export import ActionOpenInNew = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/open-in-new');
    export import ActionOpenWith = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/open-with');
    export import ActionPageview = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/pageview');
    export import ActionPanTool = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/pan-tool');
    export import ActionPayment = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/payment');
    export import ActionPermCameraMic = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/perm-camera-mic');
    export import ActionPermContactCalendar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/perm-contact-calendar');
    export import ActionPermDataSetting = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/perm-data-setting');
    export import ActionPermDeviceInformation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/perm-device-information');
    export import ActionPermIdentity = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/perm-identity');
    export import ActionPermMedia = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/perm-media');
    export import ActionPermPhoneMsg = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/perm-phone-msg');
    export import ActionPermScanWifi = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/perm-scan-wifi');
    export import ActionPets = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/pets');
    export import ActionPictureInPicture = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/picture-in-picture');
    export import ActionPictureInPictureAlt = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/picture-in-picture-alt');
    export import ActionPlayForWork = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/play-for-work');
    export import ActionPolymer = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/polymer');
    export import ActionPowerSettingsNew = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/power-settings-new');
    export import ActionPregnantWoman = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/pregnant-woman');
    export import ActionPrint = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/print');
    export import ActionQueryBuilder = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/query-builder');
    export import ActionQuestionAnswer = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/question-answer');
    export import ActionReceipt = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/receipt');
    export import ActionRecordVoiceOver = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/record-voice-over');
    export import ActionRedeem = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/redeem');
    export import ActionRemoveShoppingCart = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/remove-shopping-cart');
    export import ActionReorder = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/reorder');
    export import ActionReportProblem = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/report-problem');
    export import ActionRestore = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/restore');
    export import ActionRestorePage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/restore-page');
    export import ActionRoom = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/room');
    export import ActionRoundedCorner = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/rounded-corner');
    export import ActionRowing = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/rowing');
    export import ActionSchedule = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/schedule');
    export import ActionSearch = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/search');
    export import ActionSettings = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings');
    export import ActionSettingsApplications = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-applications');
    export import ActionSettingsBackupRestore = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-backup-restore');
    export import ActionSettingsBluetooth = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-bluetooth');
    export import ActionSettingsBrightness = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-brightness');
    export import ActionSettingsCell = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-cell');
    export import ActionSettingsEthernet = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-ethernet');
    export import ActionSettingsInputAntenna = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-input-antenna');
    export import ActionSettingsInputComponent = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-input-component');
    export import ActionSettingsInputComposite = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-input-composite');
    export import ActionSettingsInputHdmi = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-input-hdmi');
    export import ActionSettingsInputSvideo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-input-svideo');
    export import ActionSettingsOverscan = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-overscan');
    export import ActionSettingsPhone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-phone');
    export import ActionSettingsPower = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-power');
    export import ActionSettingsRemote = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-remote');
    export import ActionSettingsVoice = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/settings-voice');
    export import ActionShop = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/shop');
    export import ActionShopTwo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/shop-two');
    export import ActionShoppingBasket = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/shopping-basket');
    export import ActionShoppingCart = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/shopping-cart');
    export import ActionSpeakerNotes = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/speaker-notes');
    export import ActionSpeakerNotesOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/speaker-notes-off');
    export import ActionSpellcheck = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/spellcheck');
    export import ActionStars = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/stars');
    export import ActionStore = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/store');
    export import ActionSubject = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/subject');
    export import ActionSupervisorAccount = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/supervisor-account');
    export import ActionSwapHoriz = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/swap-horiz');
    export import ActionSwapVert = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/swap-vert');
    export import ActionSwapVerticalCircle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/swap-vertical-circle');
    export import ActionSystemUpdateAlt = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/system-update-alt');
    export import ActionTab = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/tab');
    export import ActionTabUnselected = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/tab-unselected');
    export import ActionTheaters = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/theaters');
    export import ActionThreeDRotation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/three-d-rotation');
    export import ActionThumbDown = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/thumb-down');
    export import ActionThumbUp = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/thumb-up');
    export import ActionThumbsUpDown = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/thumbs-up-down');
    export import ActionTimeline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/timeline');
    export import ActionToc = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/toc');
    export import ActionToday = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/today');
    export import ActionToll = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/toll');
    export import ActionTouchApp = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/touch-app');
    export import ActionTrackChanges = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/track-changes');
    export import ActionTranslate = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/translate');
    export import ActionTrendingDown = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/trending-down');
    export import ActionTrendingFlat = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/trending-flat');
    export import ActionTrendingUp = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/trending-up');
    export import ActionTurnedIn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/turned-in');
    export import ActionTurnedInNot = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/turned-in-not');
    export import ActionUpdate = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/update');
    export import ActionVerifiedUser = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/verified-user');
    export import ActionViewAgenda = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/view-agenda');
    export import ActionViewArray = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/view-array');
    export import ActionViewCarousel = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/view-carousel');
    export import ActionViewColumn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/view-column');
    export import ActionViewDay = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/view-day');
    export import ActionViewHeadline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/view-headline');
    export import ActionViewList = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/view-list');
    export import ActionViewModule = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/view-module');
    export import ActionViewQuilt = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/view-quilt');
    export import ActionViewStream = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/view-stream');
    export import ActionViewWeek = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/view-week');
    export import ActionVisibility = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/visibility');
    export import ActionVisibilityOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/visibility-off');
    export import ActionWatchLater = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/watch-later');
    export import ActionWork = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/work');
    export import ActionYoutubeSearchedFor = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/youtube-searched-for');
    export import ActionZoomIn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/zoom-in');
    export import ActionZoomOut = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/action/zoom-out');
    export import AlertAddAlert = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/alert/add-alert');
    export import AlertError = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/alert/error');
    export import AlertErrorOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/alert/error-outline');
    export import AlertWarning = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/alert/warning');
    export import AvAddToQueue = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/add-to-queue');
    export import AvAirplay = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/airplay');
    export import AvAlbum = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/album');
    export import AvArtTrack = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/art-track');
    export import AvAvTimer = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/av-timer');
    export import AvBrandingWatermark = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/branding-watermark');
    export import AvCallToAction = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/call-to-action');
    export import AvClosedCaption = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/closed-caption');
    export import AvEqualizer = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/equalizer');
    export import AvExplicit = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/explicit');
    export import AvFastForward = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/fast-forward');
    export import AvFastRewind = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/fast-rewind');
    export import AvFeaturedPlayList = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/featured-play-list');
    export import AvFeaturedVideo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/featured-video');
    export import AvFiberDvr = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/fiber-dvr');
    export import AvFiberManualRecord = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/fiber-manual-record');
    export import AvFiberNew = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/fiber-new');
    export import AvFiberPin = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/fiber-pin');
    export import AvFiberSmartRecord = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/fiber-smart-record');
    export import AvForward10 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/forward-10');
    export import AvForward30 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/forward-30');
    export import AvForward5 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/forward-5');
    export import AvGames = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/games');
    export import AvHd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/hd');
    export import AvHearing = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/hearing');
    export import AvHighQuality = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/high-quality');
    export import AvLibraryAdd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/library-add');
    export import AvLibraryBooks = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/library-books');
    export import AvLibraryMusic = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/library-music');
    export import AvLoop = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/loop');
    export import AvMic = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/mic');
    export import AvMicNone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/mic-none');
    export import AvMicOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/mic-off');
    export import AvMovie = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/movie');
    export import AvMusicVideo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/music-video');
    export import AvNewReleases = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/new-releases');
    export import AvNotInterested = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/not-interested');
    export import AvNote = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/note');
    export import AvPause = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/pause');
    export import AvPauseCircleFilled = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/pause-circle-filled');
    export import AvPauseCircleOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/pause-circle-outline');
    export import AvPlayArrow = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/play-arrow');
    export import AvPlayCircleFilled = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/play-circle-filled');
    export import AvPlayCircleOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/play-circle-outline');
    export import AvPlaylistAdd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/playlist-add');
    export import AvPlaylistAddCheck = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/playlist-add-check');
    export import AvPlaylistPlay = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/playlist-play');
    export import AvQueue = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/queue');
    export import AvQueueMusic = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/queue-music');
    export import AvQueuePlayNext = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/queue-play-next');
    export import AvRadio = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/radio');
    export import AvRecentActors = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/recent-actors');
    export import AvRemoveFromQueue = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/remove-from-queue');
    export import AvRepeat = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/repeat');
    export import AvRepeatOne = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/repeat-one');
    export import AvReplay = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/replay');
    export import AvReplay10 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/replay-10');
    export import AvReplay30 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/replay-30');
    export import AvReplay5 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/replay-5');
    export import AvShuffle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/shuffle');
    export import AvSkipNext = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/skip-next');
    export import AvSkipPrevious = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/skip-previous');
    export import AvSlowMotionVideo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/slow-motion-video');
    export import AvSnooze = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/snooze');
    export import AvSortByAlpha = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/sort-by-alpha');
    export import AvStop = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/stop');
    export import AvSubscriptions = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/subscriptions');
    export import AvSubtitles = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/subtitles');
    export import AvSurroundSound = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/surround-sound');
    export import AvVideoCall = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/video-call');
    export import AvVideoLabel = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/video-label');
    export import AvVideoLibrary = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/video-library');
    export import AvVideocam = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/videocam');
    export import AvVideocamOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/videocam-off');
    export import AvVolumeDown = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/volume-down');
    export import AvVolumeMute = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/volume-mute');
    export import AvVolumeOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/volume-off');
    export import AvVolumeUp = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/volume-up');
    export import AvWeb = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/web');
    export import AvWebAsset = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/av/web-asset');
    export import CommunicationBusiness = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/business');
    export import CommunicationCall = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/call');
    export import CommunicationCallEnd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/call-end');
    export import CommunicationCallMade = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/call-made');
    export import CommunicationCallMerge = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/call-merge');
    export import CommunicationCallMissed = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/call-missed');
    export import CommunicationCallMissedOutgoing = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/call-missed-outgoing');
    export import CommunicationCallReceived = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/call-received');
    export import CommunicationCallSplit = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/call-split');
    export import CommunicationChat = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/chat');
    export import CommunicationChatBubble = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/chat-bubble');
    export import CommunicationChatBubbleOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/chat-bubble-outline');
    export import CommunicationClearAll = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/clear-all');
    export import CommunicationComment = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/comment');
    export import CommunicationContactMail = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/contact-mail');
    export import CommunicationContactPhone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/contact-phone');
    export import CommunicationContacts = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/contacts');
    export import CommunicationDialerSip = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/dialer-sip');
    export import CommunicationDialpad = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/dialpad');
    export import CommunicationEmail = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/email');
    export import CommunicationForum = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/forum');
    export import CommunicationImportContacts = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/import-contacts');
    export import CommunicationImportExport = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/import-export');
    export import CommunicationInvertColorsOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/invert-colors-off');
    export import CommunicationLiveHelp = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/live-help');
    export import CommunicationLocationOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/location-off');
    export import CommunicationLocationOn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/location-on');
    export import CommunicationMailOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/mail-outline');
    export import CommunicationMessage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/message');
    export import CommunicationNoSim = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/no-sim');
    export import CommunicationPhone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/phone');
    export import CommunicationPhonelinkErase = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/phonelink-erase');
    export import CommunicationPhonelinkLock = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/phonelink-lock');
    export import CommunicationPhonelinkRing = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/phonelink-ring');
    export import CommunicationPhonelinkSetup = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/phonelink-setup');
    export import CommunicationPortableWifiOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/portable-wifi-off');
    export import CommunicationPresentToAll = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/present-to-all');
    export import CommunicationRingVolume = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/ring-volume');
    export import CommunicationRssFeed = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/rss-feed');
    export import CommunicationScreenShare = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/screen-share');
    export import CommunicationSpeakerPhone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/speaker-phone');
    export import CommunicationStayCurrentLandscape = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/stay-current-landscape');
    export import CommunicationStayCurrentPortrait = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/stay-current-portrait');
    export import CommunicationStayPrimaryLandscape = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/stay-primary-landscape');
    export import CommunicationStayPrimaryPortrait = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/stay-primary-portrait');
    export import CommunicationStopScreenShare = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/stop-screen-share');
    export import CommunicationSwapCalls = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/swap-calls');
    export import CommunicationTextsms = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/textsms');
    export import CommunicationVoicemail = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/voicemail');
    export import CommunicationVpnKey = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/communication/vpn-key');
    export import ContentAdd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/add');
    export import ContentAddBox = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/add-box');
    export import ContentAddCircle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/add-circle');
    export import ContentAddCircleOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/add-circle-outline');
    export import ContentArchive = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/archive');
    export import ContentBackspace = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/backspace');
    export import ContentBlock = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/block');
    export import ContentClear = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/clear');
    export import ContentContentCopy = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/content-copy');
    export import ContentContentCut = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/content-cut');
    export import ContentContentPaste = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/content-paste');
    export import ContentCreate = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/create');
    export import ContentDeleteSweep = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/delete-sweep');
    export import ContentDrafts = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/drafts');
    export import ContentFilterList = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/filter-list');
    export import ContentFlag = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/flag');
    export import ContentFontDownload = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/font-download');
    export import ContentForward = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/forward');
    export import ContentGesture = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/gesture');
    export import ContentInbox = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/inbox');
    export import ContentLink = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/link');
    export import ContentLowPriority = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/low-priority');
    export import ContentMail = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/mail');
    export import ContentMarkunread = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/markunread');
    export import ContentMoveToInbox = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/move-to-inbox');
    export import ContentNextWeek = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/next-week');
    export import ContentRedo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/redo');
    export import ContentRemove = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/remove');
    export import ContentRemoveCircle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/remove-circle');
    export import ContentRemoveCircleOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/remove-circle-outline');
    export import ContentReply = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/reply');
    export import ContentReplyAll = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/reply-all');
    export import ContentReport = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/report');
    export import ContentSave = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/save');
    export import ContentSelectAll = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/select-all');
    export import ContentSend = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/send');
    export import ContentSort = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/sort');
    export import ContentTextFormat = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/text-format');
    export import ContentUnarchive = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/unarchive');
    export import ContentUndo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/undo');
    export import ContentWeekend = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/content/weekend');
    export import DeviceAccessAlarm = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/access-alarm');
    export import DeviceAccessAlarms = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/access-alarms');
    export import DeviceAccessTime = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/access-time');
    export import DeviceAddAlarm = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/add-alarm');
    export import DeviceAirplanemodeActive = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/airplanemode-active');
    export import DeviceAirplanemodeInactive = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/airplanemode-inactive');
    export import DeviceBattery20 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-20');
    export import DeviceBattery30 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-30');
    export import DeviceBattery50 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-50');
    export import DeviceBattery60 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-60');
    export import DeviceBattery80 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-80');
    export import DeviceBattery90 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-90');
    export import DeviceBatteryAlert = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-alert');
    export import DeviceBatteryCharging20 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-20');
    export import DeviceBatteryCharging30 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-30');
    export import DeviceBatteryCharging50 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-50');
    export import DeviceBatteryCharging60 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-60');
    export import DeviceBatteryCharging80 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-80');
    export import DeviceBatteryCharging90 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-90');
    export import DeviceBatteryChargingFull = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-charging-full');
    export import DeviceBatteryFull = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-full');
    export import DeviceBatteryStd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-std');
    export import DeviceBatteryUnknown = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/battery-unknown');
    export import DeviceBluetooth = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/bluetooth');
    export import DeviceBluetoothConnected = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/bluetooth-connected');
    export import DeviceBluetoothDisabled = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/bluetooth-disabled');
    export import DeviceBluetoothSearching = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/bluetooth-searching');
    export import DeviceBrightnessAuto = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/brightness-auto');
    export import DeviceBrightnessHigh = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/brightness-high');
    export import DeviceBrightnessLow = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/brightness-low');
    export import DeviceBrightnessMedium = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/brightness-medium');
    export import DeviceDataUsage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/data-usage');
    export import DeviceDeveloperMode = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/developer-mode');
    export import DeviceDevices = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/devices');
    export import DeviceDvr = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/dvr');
    export import DeviceGpsFixed = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/gps-fixed');
    export import DeviceGpsNotFixed = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/gps-not-fixed');
    export import DeviceGpsOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/gps-off');
    export import DeviceGraphicEq = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/graphic-eq');
    export import DeviceLocationDisabled = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/location-disabled');
    export import DeviceLocationSearching = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/location-searching');
    export import DeviceNetworkCell = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/network-cell');
    export import DeviceNetworkWifi = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/network-wifi');
    export import DeviceNfc = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/nfc');
    export import DeviceScreenLockLandscape = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/screen-lock-landscape');
    export import DeviceScreenLockPortrait = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/screen-lock-portrait');
    export import DeviceScreenLockRotation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/screen-lock-rotation');
    export import DeviceScreenRotation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/screen-rotation');
    export import DeviceSdStorage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/sd-storage');
    export import DeviceSettingsSystemDaydream = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/settings-system-daydream');
    export import DeviceSignalCellular0Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-0-bar');
    export import DeviceSignalCellular1Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-1-bar');
    export import DeviceSignalCellular2Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-2-bar');
    export import DeviceSignalCellular3Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-3-bar');
    export import DeviceSignalCellular4Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-4-bar');
    export import DeviceSignalCellularConnectedNoInternet0Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-connected-no-internet-0-bar');
    export import DeviceSignalCellularConnectedNoInternet1Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-connected-no-internet-1-bar');
    export import DeviceSignalCellularConnectedNoInternet2Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-connected-no-internet-2-bar');
    export import DeviceSignalCellularConnectedNoInternet3Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-connected-no-internet-3-bar');
    export import DeviceSignalCellularConnectedNoInternet4Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-connected-no-internet-4-bar');
    export import DeviceSignalCellularNoSim = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-no-sim');
    export import DeviceSignalCellularNull = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-null');
    export import DeviceSignalCellularOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-cellular-off');
    export import DeviceSignalWifi0Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-0-bar');
    export import DeviceSignalWifi1Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-1-bar');
    export import DeviceSignalWifi1BarLock = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-1-bar-lock');
    export import DeviceSignalWifi2Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-2-bar');
    export import DeviceSignalWifi2BarLock = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-2-bar-lock');
    export import DeviceSignalWifi3Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-3-bar');
    export import DeviceSignalWifi3BarLock = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-3-bar-lock');
    export import DeviceSignalWifi4Bar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-4-bar');
    export import DeviceSignalWifi4BarLock = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-4-bar-lock');
    export import DeviceSignalWifiOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/signal-wifi-off');
    export import DeviceStorage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/storage');
    export import DeviceUsb = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/usb');
    export import DeviceWallpaper = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/wallpaper');
    export import DeviceWidgets = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/widgets');
    export import DeviceWifiLock = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/wifi-lock');
    export import DeviceWifiTethering = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/device/wifi-tethering');
    export import EditorAttachFile = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/attach-file');
    export import EditorAttachMoney = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/attach-money');
    export import EditorBorderAll = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-all');
    export import EditorBorderBottom = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-bottom');
    export import EditorBorderClear = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-clear');
    export import EditorBorderColor = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-color');
    export import EditorBorderHorizontal = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-horizontal');
    export import EditorBorderInner = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-inner');
    export import EditorBorderLeft = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-left');
    export import EditorBorderOuter = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-outer');
    export import EditorBorderRight = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-right');
    export import EditorBorderStyle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-style');
    export import EditorBorderTop = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-top');
    export import EditorBorderVertical = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/border-vertical');
    export import EditorBubbleChart = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/bubble-chart');
    export import EditorDragHandle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/drag-handle');
    export import EditorFormatAlignCenter = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-align-center');
    export import EditorFormatAlignJustify = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-align-justify');
    export import EditorFormatAlignLeft = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-align-left');
    export import EditorFormatAlignRight = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-align-right');
    export import EditorFormatBold = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-bold');
    export import EditorFormatClear = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-clear');
    export import EditorFormatColorFill = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-color-fill');
    export import EditorFormatColorReset = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-color-reset');
    export import EditorFormatColorText = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-color-text');
    export import EditorFormatIndentDecrease = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-indent-decrease');
    export import EditorFormatIndentIncrease = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-indent-increase');
    export import EditorFormatItalic = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-italic');
    export import EditorFormatLineSpacing = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-line-spacing');
    export import EditorFormatListBulleted = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-list-bulleted');
    export import EditorFormatListNumbered = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-list-numbered');
    export import EditorFormatPaint = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-paint');
    export import EditorFormatQuote = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-quote');
    export import EditorFormatShapes = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-shapes');
    export import EditorFormatSize = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-size');
    export import EditorFormatStrikethrough = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-strikethrough');
    export import EditorFormatTextdirectionLToR = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-textdirection-l-to-r');
    export import EditorFormatTextdirectionRToL = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-textdirection-r-to-l');
    export import EditorFormatUnderlined = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/format-underlined');
    export import EditorFunctions = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/functions');
    export import EditorHighlight = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/highlight');
    export import EditorInsertChart = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/insert-chart');
    export import EditorInsertComment = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/insert-comment');
    export import EditorInsertDriveFile = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/insert-drive-file');
    export import EditorInsertEmoticon = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/insert-emoticon');
    export import EditorInsertInvitation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/insert-invitation');
    export import EditorInsertLink = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/insert-link');
    export import EditorInsertPhoto = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/insert-photo');
    export import EditorLinearScale = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/linear-scale');
    export import EditorMergeType = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/merge-type');
    export import EditorModeComment = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/mode-comment');
    export import EditorModeEdit = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/mode-edit');
    export import EditorMonetizationOn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/monetization-on');
    export import EditorMoneyOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/money-off');
    export import EditorMultilineChart = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/multiline-chart');
    export import EditorPieChart = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/pie-chart');
    export import EditorPieChartOutlined = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/pie-chart-outlined');
    export import EditorPublish = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/publish');
    export import EditorShortText = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/short-text');
    export import EditorShowChart = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/show-chart');
    export import EditorSpaceBar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/space-bar');
    export import EditorStrikethroughS = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/strikethrough-s');
    export import EditorTextFields = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/text-fields');
    export import EditorTitle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/title');
    export import EditorVerticalAlignBottom = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/vertical-align-bottom');
    export import EditorVerticalAlignCenter = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/vertical-align-center');
    export import EditorVerticalAlignTop = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/vertical-align-top');
    export import EditorWrapText = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/editor/wrap-text');
    export import FileAttachment = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/attachment');
    export import FileCloud = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/cloud');
    export import FileCloudCircle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/cloud-circle');
    export import FileCloudDone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/cloud-done');
    export import FileCloudDownload = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/cloud-download');
    export import FileCloudOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/cloud-off');
    export import FileCloudQueue = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/cloud-queue');
    export import FileCloudUpload = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/cloud-upload');
    export import FileCreateNewFolder = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/create-new-folder');
    export import FileFileDownload = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/file-download');
    export import FileFileUpload = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/file-upload');
    export import FileFolder = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/folder');
    export import FileFolderOpen = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/folder-open');
    export import FileFolderShared = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/file/folder-shared');
    export import HardwareCast = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/cast');
    export import HardwareCastConnected = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/cast-connected');
    export import HardwareComputer = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/computer');
    export import HardwareDesktopMac = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/desktop-mac');
    export import HardwareDesktopWindows = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/desktop-windows');
    export import HardwareDeveloperBoard = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/developer-board');
    export import HardwareDeviceHub = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/device-hub');
    export import HardwareDevicesOther = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/devices-other');
    export import HardwareDock = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/dock');
    export import HardwareGamepad = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/gamepad');
    export import HardwareHeadset = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/headset');
    export import HardwareHeadsetMic = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/headset-mic');
    export import HardwareKeyboard = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard');
    export import HardwareKeyboardArrowDown = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-arrow-down');
    export import HardwareKeyboardArrowLeft = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-arrow-left');
    export import HardwareKeyboardArrowRight = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-arrow-right');
    export import HardwareKeyboardArrowUp = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-arrow-up');
    export import HardwareKeyboardBackspace = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-backspace');
    export import HardwareKeyboardCapslock = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-capslock');
    export import HardwareKeyboardHide = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-hide');
    export import HardwareKeyboardReturn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-return');
    export import HardwareKeyboardTab = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-tab');
    export import HardwareKeyboardVoice = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/keyboard-voice');
    export import HardwareLaptop = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/laptop');
    export import HardwareLaptopChromebook = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/laptop-chromebook');
    export import HardwareLaptopMac = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/laptop-mac');
    export import HardwareLaptopWindows = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/laptop-windows');
    export import HardwareMemory = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/memory');
    export import HardwareMouse = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/mouse');
    export import HardwarePhoneAndroid = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/phone-android');
    export import HardwarePhoneIphone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/phone-iphone');
    export import HardwarePhonelink = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/phonelink');
    export import HardwarePhonelinkOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/phonelink-off');
    export import HardwarePowerInput = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/power-input');
    export import HardwareRouter = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/router');
    export import HardwareScanner = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/scanner');
    export import HardwareSecurity = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/security');
    export import HardwareSimCard = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/sim-card');
    export import HardwareSmartphone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/smartphone');
    export import HardwareSpeaker = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/speaker');
    export import HardwareSpeakerGroup = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/speaker-group');
    export import HardwareTablet = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/tablet');
    export import HardwareTabletAndroid = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/tablet-android');
    export import HardwareTabletMac = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/tablet-mac');
    export import HardwareToys = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/toys');
    export import HardwareTv = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/tv');
    export import HardwareVideogameAsset = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/videogame-asset');
    export import HardwareWatch = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/hardware/watch');
    export import ImageAddAPhoto = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/add-a-photo');
    export import ImageAddToPhotos = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/add-to-photos');
    export import ImageAdjust = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/adjust');
    export import ImageAssistant = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/assistant');
    export import ImageAssistantPhoto = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/assistant-photo');
    export import ImageAudiotrack = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/audiotrack');
    export import ImageBlurCircular = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/blur-circular');
    export import ImageBlurLinear = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/blur-linear');
    export import ImageBlurOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/blur-off');
    export import ImageBlurOn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/blur-on');
    export import ImageBrightness1 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/brightness-1');
    export import ImageBrightness2 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/brightness-2');
    export import ImageBrightness3 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/brightness-3');
    export import ImageBrightness4 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/brightness-4');
    export import ImageBrightness5 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/brightness-5');
    export import ImageBrightness6 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/brightness-6');
    export import ImageBrightness7 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/brightness-7');
    export import ImageBrokenImage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/broken-image');
    export import ImageBrush = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/brush');
    export import ImageBurstMode = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/burst-mode');
    export import ImageCamera = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/camera');
    export import ImageCameraAlt = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/camera-alt');
    export import ImageCameraFront = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/camera-front');
    export import ImageCameraRear = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/camera-rear');
    export import ImageCameraRoll = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/camera-roll');
    export import ImageCenterFocusStrong = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/center-focus-strong');
    export import ImageCenterFocusWeak = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/center-focus-weak');
    export import ImageCollections = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/collections');
    export import ImageCollectionsBookmark = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/collections-bookmark');
    export import ImageColorLens = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/color-lens');
    export import ImageColorize = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/colorize');
    export import ImageCompare = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/compare');
    export import ImageControlPoint = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/control-point');
    export import ImageControlPointDuplicate = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/control-point-duplicate');
    export import ImageCrop = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop');
    export import ImageCrop169 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop-16-9');
    export import ImageCrop32 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop-3-2');
    export import ImageCrop54 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop-5-4');
    export import ImageCrop75 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop-7-5');
    export import ImageCropDin = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop-din');
    export import ImageCropFree = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop-free');
    export import ImageCropLandscape = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop-landscape');
    export import ImageCropOriginal = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop-original');
    export import ImageCropPortrait = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop-portrait');
    export import ImageCropRotate = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop-rotate');
    export import ImageCropSquare = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/crop-square');
    export import ImageDehaze = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/dehaze');
    export import ImageDetails = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/details');
    export import ImageEdit = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/edit');
    export import ImageExposure = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/exposure');
    export import ImageExposureNeg1 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/exposure-neg-1');
    export import ImageExposureNeg2 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/exposure-neg-2');
    export import ImageExposurePlus1 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/exposure-plus-1');
    export import ImageExposurePlus2 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/exposure-plus-2');
    export import ImageExposureZero = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/exposure-zero');
    export import ImageFilter = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter');
    export import ImageFilter1 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-1');
    export import ImageFilter2 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-2');
    export import ImageFilter3 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-3');
    export import ImageFilter4 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-4');
    export import ImageFilter5 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-5');
    export import ImageFilter6 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-6');
    export import ImageFilter7 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-7');
    export import ImageFilter8 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-8');
    export import ImageFilter9 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-9');
    export import ImageFilter9Plus = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-9-plus');
    export import ImageFilterBAndW = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-b-and-w');
    export import ImageFilterCenterFocus = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-center-focus');
    export import ImageFilterDrama = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-drama');
    export import ImageFilterFrames = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-frames');
    export import ImageFilterHdr = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-hdr');
    export import ImageFilterNone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-none');
    export import ImageFilterTiltShift = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-tilt-shift');
    export import ImageFilterVintage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/filter-vintage');
    export import ImageFlare = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/flare');
    export import ImageFlashAuto = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/flash-auto');
    export import ImageFlashOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/flash-off');
    export import ImageFlashOn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/flash-on');
    export import ImageFlip = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/flip');
    export import ImageGradient = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/gradient');
    export import ImageGrain = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/grain');
    export import ImageGridOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/grid-off');
    export import ImageGridOn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/grid-on');
    export import ImageHdrOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/hdr-off');
    export import ImageHdrOn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/hdr-on');
    export import ImageHdrStrong = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/hdr-strong');
    export import ImageHdrWeak = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/hdr-weak');
    export import ImageHealing = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/healing');
    export import ImageImage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/image');
    export import ImageImageAspectRatio = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/image-aspect-ratio');
    export import ImageIso = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/iso');
    export import ImageLandscape = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/landscape');
    export import ImageLeakAdd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/leak-add');
    export import ImageLeakRemove = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/leak-remove');
    export import ImageLens = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/lens');
    export import ImageLinkedCamera = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/linked-camera');
    export import ImageLooks = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/looks');
    export import ImageLooks3 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/looks-3');
    export import ImageLooks4 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/looks-4');
    export import ImageLooks5 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/looks-5');
    export import ImageLooks6 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/looks-6');
    export import ImageLooksOne = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/looks-one');
    export import ImageLooksTwo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/looks-two');
    export import ImageLoupe = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/loupe');
    export import ImageMonochromePhotos = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/monochrome-photos');
    export import ImageMovieCreation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/movie-creation');
    export import ImageMovieFilter = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/movie-filter');
    export import ImageMusicNote = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/music-note');
    export import ImageNature = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/nature');
    export import ImageNaturePeople = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/nature-people');
    export import ImageNavigateBefore = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/navigate-before');
    export import ImageNavigateNext = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/navigate-next');
    export import ImagePalette = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/palette');
    export import ImagePanorama = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/panorama');
    export import ImagePanoramaFishEye = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/panorama-fish-eye');
    export import ImagePanoramaHorizontal = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/panorama-horizontal');
    export import ImagePanoramaVertical = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/panorama-vertical');
    export import ImagePanoramaWideAngle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/panorama-wide-angle');
    export import ImagePhoto = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/photo');
    export import ImagePhotoAlbum = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/photo-album');
    export import ImagePhotoCamera = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/photo-camera');
    export import ImagePhotoFilter = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/photo-filter');
    export import ImagePhotoLibrary = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/photo-library');
    export import ImagePhotoSizeSelectActual = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/photo-size-select-actual');
    export import ImagePhotoSizeSelectLarge = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/photo-size-select-large');
    export import ImagePhotoSizeSelectSmall = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/photo-size-select-small');
    export import ImagePictureAsPdf = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/picture-as-pdf');
    export import ImagePortrait = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/portrait');
    export import ImageRemoveRedEye = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/remove-red-eye');
    export import ImageRotate90DegreesCcw = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/rotate-90-degrees-ccw');
    export import ImageRotateLeft = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/rotate-left');
    export import ImageRotateRight = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/rotate-right');
    export import ImageSlideshow = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/slideshow');
    export import ImageStraighten = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/straighten');
    export import ImageStyle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/style');
    export import ImageSwitchCamera = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/switch-camera');
    export import ImageSwitchVideo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/switch-video');
    export import ImageTagFaces = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/tag-faces');
    export import ImageTexture = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/texture');
    export import ImageTimelapse = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/timelapse');
    export import ImageTimer = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/timer');
    export import ImageTimer10 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/timer-10');
    export import ImageTimer3 = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/timer-3');
    export import ImageTimerOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/timer-off');
    export import ImageTonality = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/tonality');
    export import ImageTransform = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/transform');
    export import ImageTune = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/tune');
    export import ImageViewComfy = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/view-comfy');
    export import ImageViewCompact = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/view-compact');
    export import ImageVignette = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/vignette');
    export import ImageWbAuto = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/wb-auto');
    export import ImageWbCloudy = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/wb-cloudy');
    export import ImageWbIncandescent = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/wb-incandescent');
    export import ImageWbIridescent = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/wb-iridescent');
    export import ImageWbSunny = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/image/wb-sunny');
    export import MapsAddLocation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/add-location');
    export import MapsBeenhere = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/beenhere');
    export import MapsDirections = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/directions');
    export import MapsDirectionsBike = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/directions-bike');
    export import MapsDirectionsBoat = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/directions-boat');
    export import MapsDirectionsBus = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/directions-bus');
    export import MapsDirectionsCar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/directions-car');
    export import MapsDirectionsRailway = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/directions-railway');
    export import MapsDirectionsRun = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/directions-run');
    export import MapsDirectionsSubway = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/directions-subway');
    export import MapsDirectionsTransit = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/directions-transit');
    export import MapsDirectionsWalk = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/directions-walk');
    export import MapsEditLocation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/edit-location');
    export import MapsEvStation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/ev-station');
    export import MapsFlight = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/flight');
    export import MapsHotel = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/hotel');
    export import MapsLayers = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/layers');
    export import MapsLayersClear = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/layers-clear');
    export import MapsLocalActivity = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-activity');
    export import MapsLocalAirport = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-airport');
    export import MapsLocalAtm = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-atm');
    export import MapsLocalBar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-bar');
    export import MapsLocalCafe = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-cafe');
    export import MapsLocalCarWash = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-car-wash');
    export import MapsLocalConvenienceStore = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-convenience-store');
    export import MapsLocalDining = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-dining');
    export import MapsLocalDrink = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-drink');
    export import MapsLocalFlorist = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-florist');
    export import MapsLocalGasStation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-gas-station');
    export import MapsLocalGroceryStore = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-grocery-store');
    export import MapsLocalHospital = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-hospital');
    export import MapsLocalHotel = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-hotel');
    export import MapsLocalLaundryService = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-laundry-service');
    export import MapsLocalLibrary = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-library');
    export import MapsLocalMall = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-mall');
    export import MapsLocalMovies = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-movies');
    export import MapsLocalOffer = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-offer');
    export import MapsLocalParking = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-parking');
    export import MapsLocalPharmacy = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-pharmacy');
    export import MapsLocalPhone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-phone');
    export import MapsLocalPizza = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-pizza');
    export import MapsLocalPlay = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-play');
    export import MapsLocalPostOffice = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-post-office');
    export import MapsLocalPrintshop = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-printshop');
    export import MapsLocalSee = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-see');
    export import MapsLocalShipping = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-shipping');
    export import MapsLocalTaxi = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/local-taxi');
    export import MapsMap = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/map');
    export import MapsMyLocation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/my-location');
    export import MapsNavigation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/navigation');
    export import MapsNearMe = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/near-me');
    export import MapsPersonPin = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/person-pin');
    export import MapsPersonPinCircle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/person-pin-circle');
    export import MapsPinDrop = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/pin-drop');
    export import MapsPlace = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/place');
    export import MapsRateReview = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/rate-review');
    export import MapsRestaurant = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/restaurant');
    export import MapsRestaurantMenu = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/restaurant-menu');
    export import MapsSatellite = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/satellite');
    export import MapsStoreMallDirectory = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/store-mall-directory');
    export import MapsStreetview = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/streetview');
    export import MapsSubway = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/subway');
    export import MapsTerrain = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/terrain');
    export import MapsTraffic = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/traffic');
    export import MapsTrain = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/train');
    export import MapsTram = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/tram');
    export import MapsTransferWithinAStation = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/transfer-within-a-station');
    export import MapsZoomOutMap = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/maps/zoom-out-map');
    export import NavigationApps = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/apps');
    export import NavigationArrowBack = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-back');
    export import NavigationArrowDownward = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-downward');
    export import NavigationArrowDropDown = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-drop-down');
    export import NavigationArrowDropDownCircle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-drop-down-circle');
    export import NavigationArrowDropUp = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-drop-up');
    export import NavigationArrowForward = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-forward');
    export import NavigationArrowUpward = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/arrow-upward');
    export import NavigationCancel = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/cancel');
    export import NavigationCheck = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/check');
    export import NavigationChevronLeft = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/chevron-left');
    export import NavigationChevronRight = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/chevron-right');
    export import NavigationClose = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/close');
    export import NavigationExpandLess = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/expand-less');
    export import NavigationExpandMore = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/expand-more');
    export import NavigationFirstPage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/first-page');
    export import NavigationFullscreen = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/fullscreen');
    export import NavigationFullscreenExit = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/fullscreen-exit');
    export import NavigationLastPage = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/last-page');
    export import NavigationMenu = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/menu');
    export import NavigationMoreHoriz = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/more-horiz');
    export import NavigationMoreVert = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/more-vert');
    export import NavigationRefresh = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/refresh');
    export import NavigationSubdirectoryArrowLeft = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/subdirectory-arrow-left');
    export import NavigationSubdirectoryArrowRight = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/subdirectory-arrow-right');
    export import NavigationUnfoldLess = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/unfold-less');
    export import NavigationUnfoldMore = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation/unfold-more');
    export import NotificationAdb = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/adb');
    export import NotificationAirlineSeatFlat = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-flat');
    export import NotificationAirlineSeatFlatAngled = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-flat-angled');
    export import NotificationAirlineSeatIndividualSuite = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-individual-suite');
    export import NotificationAirlineSeatLegroomExtra = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-legroom-extra');
    export import NotificationAirlineSeatLegroomNormal = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-legroom-normal');
    export import NotificationAirlineSeatLegroomReduced = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-legroom-reduced');
    export import NotificationAirlineSeatReclineExtra = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-recline-extra');
    export import NotificationAirlineSeatReclineNormal = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/airline-seat-recline-normal');
    export import NotificationBluetoothAudio = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/bluetooth-audio');
    export import NotificationConfirmationNumber = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/confirmation-number');
    export import NotificationDiscFull = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/disc-full');
    export import NotificationDoNotDisturb = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/do-not-disturb');
    export import NotificationDoNotDisturbAlt = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/do-not-disturb-alt');
    export import NotificationDoNotDisturbOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/do-not-disturb-off');
    export import NotificationDoNotDisturbOn = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/do-not-disturb-on');
    export import NotificationDriveEta = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/drive-eta');
    export import NotificationEnhancedEncryption = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/enhanced-encryption');
    export import NotificationEventAvailable = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/event-available');
    export import NotificationEventBusy = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/event-busy');
    export import NotificationEventNote = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/event-note');
    export import NotificationFolderSpecial = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/folder-special');
    export import NotificationLiveTv = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/live-tv');
    export import NotificationMms = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/mms');
    export import NotificationMore = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/more');
    export import NotificationNetworkCheck = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/network-check');
    export import NotificationNetworkLocked = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/network-locked');
    export import NotificationNoEncryption = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/no-encryption');
    export import NotificationOndemandVideo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/ondemand-video');
    export import NotificationPersonalVideo = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/personal-video');
    export import NotificationPhoneBluetoothSpeaker = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/phone-bluetooth-speaker');
    export import NotificationPhoneForwarded = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/phone-forwarded');
    export import NotificationPhoneInTalk = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/phone-in-talk');
    export import NotificationPhoneLocked = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/phone-locked');
    export import NotificationPhoneMissed = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/phone-missed');
    export import NotificationPhonePaused = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/phone-paused');
    export import NotificationPower = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/power');
    export import NotificationPriorityHigh = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/priority-high');
    export import NotificationRvHookup = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/rv-hookup');
    export import NotificationSdCard = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/sd-card');
    export import NotificationSimCardAlert = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/sim-card-alert');
    export import NotificationSms = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/sms');
    export import NotificationSmsFailed = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/sms-failed');
    export import NotificationSync = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/sync');
    export import NotificationSyncDisabled = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/sync-disabled');
    export import NotificationSyncProblem = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/sync-problem');
    export import NotificationSystemUpdate = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/system-update');
    export import NotificationTapAndPlay = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/tap-and-play');
    export import NotificationTimeToLeave = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/time-to-leave');
    export import NotificationVibration = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/vibration');
    export import NotificationVoiceChat = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/voice-chat');
    export import NotificationVpnLock = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/vpn-lock');
    export import NotificationWc = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/wc');
    export import NotificationWifi = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/notification/wifi');
    export import PlacesAcUnit = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/ac-unit');
    export import PlacesAirportShuttle = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/airport-shuttle');
    export import PlacesAllInclusive = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/all-inclusive');
    export import PlacesBeachAccess = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/beach-access');
    export import PlacesBusinessCenter = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/business-center');
    export import PlacesCasino = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/casino');
    export import PlacesChildCare = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/child-care');
    export import PlacesChildFriendly = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/child-friendly');
    export import PlacesFitnessCenter = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/fitness-center');
    export import PlacesFreeBreakfast = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/free-breakfast');
    export import PlacesGolfCourse = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/golf-course');
    export import PlacesHotTub = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/hot-tub');
    export import PlacesKitchen = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/kitchen');
    export import PlacesPool = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/pool');
    export import PlacesRoomService = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/room-service');
    export import PlacesRvHookup = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/rv-hookup');
    export import PlacesSmokeFree = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/smoke-free');
    export import PlacesSmokingRooms = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/smoking-rooms');
    export import PlacesSpa = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/places/spa');
    export import SocialCake = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/cake');
    export import SocialDomain = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/domain');
    export import SocialGroup = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/group');
    export import SocialGroupAdd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/group-add');
    export import SocialLocationCity = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/location-city');
    export import SocialMood = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/mood');
    export import SocialMoodBad = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/mood-bad');
    export import SocialNotifications = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/notifications');
    export import SocialNotificationsActive = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/notifications-active');
    export import SocialNotificationsNone = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/notifications-none');
    export import SocialNotificationsOff = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/notifications-off');
    export import SocialNotificationsPaused = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/notifications-paused');
    export import SocialPages = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/pages');
    export import SocialPartyMode = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/party-mode');
    export import SocialPeople = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/people');
    export import SocialPeopleOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/people-outline');
    export import SocialPerson = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/person');
    export import SocialPersonAdd = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/person-add');
    export import SocialPersonOutline = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/person-outline');
    export import SocialPlusOne = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/plus-one');
    export import SocialPoll = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/poll');
    export import SocialPublic = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/public');
    export import SocialSchool = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/school');
    export import SocialSentimentDissatisfied = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/sentiment-dissatisfied');
    export import SocialSentimentNeutral = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/sentiment-neutral');
    export import SocialSentimentSatisfied = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/sentiment-satisfied');
    export import SocialSentimentVeryDissatisfied = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/sentiment-very-dissatisfied');
    export import SocialSentimentVerySatisfied = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/sentiment-very-satisfied');
    export import SocialShare = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/share');
    export import SocialWhatshot = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/social/whatshot');
    export import ToggleCheckBox = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/toggle/check-box');
    export import ToggleCheckBoxOutlineBlank = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/toggle/check-box-outline-blank');
    export import ToggleIndeterminateCheckBox = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/toggle/indeterminate-check-box');
    export import ToggleRadioButtonChecked = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/toggle/radio-button-checked');
    export import ToggleRadioButtonUnchecked = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/toggle/radio-button-unchecked');
    export import ToggleStar = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/toggle/star');
    export import ToggleStarBorder = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/toggle/star-border');
    export import ToggleStarHalf = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/toggle/star-half');
// }}}
    export import NavigationArrowDropRight = __MaterialUi.SvgIcon; // require('material-ui/svg-icons/navigation-arrow-drop-right');
}

declare module 'material-ui/internal/AppCanvas' {
    export interface AppCanvasProps extends React.Props<AppCanvas> { }
    class AppCanvas extends React.Component<AppCanvasProps> { }
    export default AppCanvas;
}
declare module 'material-ui/internal/AutoLockScrolling' {
    export interface AutoLockScrollingProps extends React.Props<AutoLockScrolling> {
        lock: boolean;
    }
    class AutoLockScrolling extends React.Component<AutoLockScrollingProps> { }
    export default AutoLockScrolling;
}
declare module 'material-ui/internal/BeforeAfterWrapper' {
    export interface BeforeAfterWrapperProps extends React.Props<BeforeAfterWrapper> {
        afterElementType?: string;
        afterStyle?: React.CSSProperties;
        beforeElementType?: string;
        beforeStyle?: React.CSSProperties;
        elementType?: string;
        style?: React.CSSProperties;
    }
    class BeforeAfterWrapper extends React.Component<BeforeAfterWrapperProps> { }
    export default BeforeAfterWrapper;
}
declare module 'material-ui/internal/CircleRipple' {
    export interface CircleRippleProps extends React.Props<CircleRipple> {
        aborted?: boolean;
        color?: string;
        opacity?: number;
        style?: React.CSSProperties;
    }
    class CircleRipple extends React.Component<CircleRippleProps> { }
    export default CircleRipple;
}
declare module 'material-ui/internal/ClearFix' {
    export interface ClearFixProps extends React.Props<ClearFix> {
        style?: React.CSSProperties;
    }
    class ClearFix extends React.Component<ClearFixProps> { }
    export default ClearFix;
}
declare module 'material-ui/internal/ClickAwayListener' {
    export interface ClickAwayListenerProps extends React.Props<ClickAwayListener> {
        onClickAway?: any;
    }
    class ClickAwayListener extends React.Component<ClickAwayListenerProps> { }
    export default ClickAwayListener;
}
declare module 'material-ui/internal/EnhancedButton' {
    export interface EnhancedButtonProps extends __MaterialUi.SharedEnhancedButtonProps<EnhancedButton> {
    }
    class EnhancedButton extends React.Component<EnhancedButtonProps> { }
    export default EnhancedButton;
}
declare module 'material-ui/internal/EnhancedSwitch' {
    export interface EnhancedSwitchProps extends __MaterialUi.Switches.CommonEnhancedSwitchProps<EnhancedSwitch> {
    }
    class EnhancedSwitch extends React.Component<EnhancedSwitchProps> { }
    export default EnhancedSwitch;
}
declare module 'material-ui/internal/ExpandTransition' {
    export interface ExpandTransitionProps extends React.Props<ExpandTransition> {
        enterDelay?: number;
        loading?: boolean;
        open?: boolean;
        style?: React.CSSProperties;
        transitionDelay?: number;
        transitionDuration?: number;
    }
    class ExpandTransition extends React.Component<ExpandTransitionProps> { }
    export default ExpandTransition;
}
declare module 'material-ui/internal/ExpandTransitionChild' {
    export interface ExpandTransitionChildProps extends React.Props<ExpandTransitionChild> {
        enterDelay?: number;
        style?: React.CSSProperties;
        transitionDelay?: number;
        transitionDuration?: number;
    }
    class ExpandTransitionChild extends React.Component<ExpandTransitionChildProps> { }
    export default ExpandTransitionChild;
}
declare module 'material-ui/internal/FocusRipple' {
    export interface FocusRippleProps extends React.Props<FocusRipple> {
        color?: string;
        innerStyle?: React.CSSProperties;
        opacity?: number;
        show?: boolean;
        style?: React.CSSProperties;
    }
    class FocusRipple extends React.Component<FocusRippleProps> { }
    export default FocusRipple;
}
declare module 'material-ui/internal/Overlay' {
    export interface OverlayProps extends React.Props<Overlay> {
        autoLockScrolling?: boolean;
        show: boolean;
        style?: React.CSSProperties;
        transitionEnabled?: boolean;
        onClick?: React.MouseEventHandler<{}>;
    }
    class Overlay extends React.Component<OverlayProps> { }
    export default Overlay;
}
declare module 'material-ui/internal/RenderToLayer' {
    export interface RenderToLayerProps extends React.Props<RenderToLayer> {
        componentClickAway?: Function;
        open: boolean;
        render: Function;
        useLayerForClickAway?: boolean;
    }
    class RenderToLayer extends React.Component<RenderToLayerProps> { }
    export default RenderToLayer;
}
declare module 'material-ui/internal/ScaleIn' {
    export interface ScaleInProps extends React.Props<ScaleIn> {
        childStyle?: React.CSSProperties;
        enterDelay?: number;
        maxScale?: number;
        minScale?: number;
    }
    class ScaleIn extends React.Component<ScaleInProps> { }
    export default ScaleIn;
}
declare module 'material-ui/internal/ScaleInChild' {
    export interface ScaleInChildProps extends React.Props<ScaleInChild> {
        enterDelay?: number;
        maxScale?: number;
        minScale?: number;
        style?: React.CSSProperties;
    }
    class ScaleInChild extends React.Component<ScaleInChildProps> { }
    export default ScaleInChild;
}
declare module 'material-ui/internal/SlideIn' {
    export interface SlideInProps extends React.Props<SlideIn> {
        childStyle?: React.CSSProperties;
        direction?: __MaterialUi.propTypes.direction;
        enterDelay?: number;
        style?: React.CSSProperties;
    }
    class SlideIn extends React.Component<SlideInProps> { }
    export default SlideIn;
}
declare module 'material-ui/internal/SlideInChild' {
    export interface SlideInChildProps extends React.Props<SlideInChild> {
        direction?: string;
        enterDelay?: number;
        getLeaveDirection: Function;
        style?: React.CSSProperties;
    }
    class SlideInChild extends React.Component<SlideInChildProps> { }
    export default SlideInChild;
}
declare module 'material-ui/internal/Tooltip' {
    export interface TooltipProps extends React.Props<Tooltip> {
        className?: string;
        horizontalPosition?: __MaterialUi.propTypes.tooltipHorizontal;
        label: any;
        show?: boolean;
        style?: React.CSSProperties;
        touch?: boolean;
        verticalPosition?: __MaterialUi.propTypes.vertical;
    }
    class Tooltip extends React.Component<TooltipProps> { }
    export default Tooltip;
}
declare module 'material-ui/internal/TouchRipple' {
    export interface TouchRippleProps extends React.Props<TouchRipple> {
        abortOnScroll?: boolean;
        centerRipple?: boolean;
        color?: string;
        opacity?: number;
        style?: React.CSSProperties;
    }
    class TouchRipple extends React.Component<TouchRippleProps> { }
    export default TouchRipple;
}
