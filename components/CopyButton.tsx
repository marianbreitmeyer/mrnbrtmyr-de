'use client';
import Action from '@/components/Action';

const CopyButton = () => (
  <Action
    as="button"
    onClick={() => console.log('click is working')}
    icon={{ variant: 'clipboard' }}
  >{`hi@marianbreitmeyer.de`}</Action>
);

export default CopyButton;
