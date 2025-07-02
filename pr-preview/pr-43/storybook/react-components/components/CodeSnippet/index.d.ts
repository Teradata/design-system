import { default as React } from '../../../../../../node_modules/react';

interface CodeSnippetProps {
    /**
     * Whether the header is hidden
     */
    hideHeader?: boolean;
    /**
     * Whether the code snippet is inline
     */
    inline?: boolean;
    /**
     * Label displayed in the header
     */
    label?: string;
    /**
     * The language used in the snippet
     */
    language: string;
    /**
     * Code content
     */
    content: string;
    /**
     * Max height of the code snippet container
     */
    maxHeight?: number;
}
declare const CodeSnippet: React.FC<CodeSnippetProps>;
export default CodeSnippet;
