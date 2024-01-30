
import RMGButton from 'src/components/RMGButton';
import RMGHeader from 'src/components/RMGHeader';
import RMGImage from 'src/components/RMGImage';
import RMGInput from 'src/components/RMGInput';
import RMGText from 'src/components/RMGText';
const atomicComponents_ = [RMGButton, RMGHeader, RMGImage, RMGInput, RMGText]

export function generateGPTPrompt(userInput: string): string {
  // Combine user input and atomic components to create a prompt
  // const componentsPrompt = atomicComponents
  //   .map((component) => `<${component.name} ${Object.entries(component.props).map(([prop, value]) => `${prop}="${value}"`).join(' ')} />`)
  //   .join('\n');

  const fullPrompt = `User Input: ${userInput}\n\nAtomic Components:\n${atomicComponents_}\n\nGenerate JSX code.`;

  return fullPrompt;
}
