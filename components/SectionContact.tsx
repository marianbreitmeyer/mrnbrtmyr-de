import Section from '@/components/Section';
import Contact from './Contact';

const SectionContact = () => (
  <Section title="Contact">
    <Contact title="Twitter" handle="@m_breitmeyer" href="https://test.test" />
    <Contact
      title="LinkedIn"
      handle="@marianbreitmeyer"
      href="https://test.test"
    />
    <Contact
      title="E-Mail"
      handle="info@marianbreitmeyer.de"
      href="https://test.test"
    />
    <Contact title="GitHub" handle="@mbreitmeyer" href="https://test.test" />
  </Section>
);

export default SectionContact;
