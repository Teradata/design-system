import { CovalentCodeSnippet } from '@covalent/components';
import { createComponent } from '@lit/react';
import React from 'react';
import IconButton from '../IconButton';
import styles from './styles.module.scss';

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

const CodeSnippetComponent = createComponent({
  tagName: 'cv-code-snippet',
  elementClass: CovalentCodeSnippet as any,
  react: React,
});

const CodeSnippet: React.FC<CodeSnippetProps> = (props) => {
  const { content, hideHeader } = props;
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className={styles.codeSnippetWrapper}>
      <div
        className={`${styles.codeSnippet} ${
          hideHeader ? styles.headerHidden : ''
        }`}
      >
        <CodeSnippetComponent {...props}>{content}</CodeSnippetComponent>
        <div className={`${styles.copyButton}`}>
          <IconButton icon="content_copy" onClick={copyToClipBoard} />
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
