import { TestPackage, TestPackageProps } from '@zunaib.imtiaz/react-npm-package';
import '@geneecode/geneeui/dist/geneeui.min.css';
import Button from '@geneecode/geneeui/lib/Button';
import React, { FC } from 'react';

export interface reactnpmpackageProps extends TestPackageProps {

}

export const reactnpmpackage: FC<reactnpmpackageProps> = ({ className, children }) => {
    return (
        // <TestPackage className={className}>
        //     {children}
        // </TestPackage>

        <Button>
            Button
       </Button>

    )
};

export default reactnpmpackage;