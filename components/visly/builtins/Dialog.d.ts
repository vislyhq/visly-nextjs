import React from 'react';
interface AriaLabelingProps {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string;
}
export interface DialogProps extends AriaLabelingProps {
    isOpen: boolean;
    onClose: () => void;
    autoFocusFirst?: boolean;
    children: React.ReactNode | React.ReactNodeArray;
    backdropColor: string;
}
export declare function Dialog(props: DialogProps): any;
export {};
