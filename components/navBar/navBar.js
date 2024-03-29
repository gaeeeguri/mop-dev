import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from './logo';

import NextLink from 'next/link';
import { FaGithub } from 'react-icons/fa';
import ThemeToggleButton from './ThemeToggleButton';
import { HamburgerIcon } from '@chakra-ui/icons';
import { forwardRef } from 'react';

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

// eslint-disable-next-line react/display-name
const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const NavBar = (props) => {
  const { path } = props;

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        wrap='wrap'
        textAlign='center'
        alignItems='flex-start'
        justify='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing='tighter'>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt-={{ base: 4, md: 0 }}
        >
          {/*<LinkItem href='/about' path={path}>*/}
          {/*  About*/}
          {/*</LinkItem>*/}
          <LinkItem
            target='_blank'
            href='https://github.com/gaeeeguri/mop-dev'
            path={path}
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
          >
            <FaGithub />
            Source
          </LinkItem>
          {/*<LinkItem*/}
          {/*  target='_blank'*/}
          {/*  href='/study'*/}
          {/*  path={path}*/}
          {/*  display='inline-flex'*/}
          {/*  alignItems='center'*/}
          {/*  style={{ gap: 4 }}*/}
          {/*  pl={2}*/}
          {/*>*/}
          {/*  Study*/}
          {/*</LinkItem>*/}
          {/*<LinkItem*/}
          {/*  target='_blank'*/}
          {/*  href='/'*/}
          {/*  path={path}*/}
          {/*  display='inline-flex'*/}
          {/*  alignItems='center'*/}
          {/*  style={{ gap: 4 }}*/}
          {/*  pl={2}*/}
          {/*>*/}
          {/*  Course*/}
          {/*</LinkItem>*/}
        </Stack>

        <Box flex={1} align='right'>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              ></MenuButton>
              <MenuList>
                {/*<MenuItem as={MenuLink} href='/about'>*/}
                {/*  About*/}
                {/*</MenuItem>*/}
                <MenuItem as={MenuLink} href='/'>
                  Courses
                </MenuItem>
                <MenuItem as={Link} href='https://github.com/gaeeeguri/mop-dev'>
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default NavBar;
