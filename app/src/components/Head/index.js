import React from 'react';
import NextHead from 'next/head';
import { string, array } from 'prop-types';
import defaults from './defaults';

const buildTitle = (title) => title ? title + ' | ' + defaults.title : defaults.title;

const Head = ({ title, description, url, ogImage, keywords }) => (
  <NextHead>
    <meta httpEquiv="content-language" content="en-us" />
    <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
    <meta httpEquiv="cache-control" content="no-cache" />
    <meta httpEquiv="revisit-after" content="7 days" />

    <meta name="description" content={ description | defaults.description } />
    <meta name="generator" content={ defaults.url } />
    <meta name="webmaster" content="Gabriel Lima" />
    <meta name="viewport" content="initial-scale=1, user-scalable=yes" />
    <meta name="keywords" content={(keywords || defaults.keywords).join(', ')} />
    <meta name="charset" content="UTF-8" />
    <meta name="author" content={defaults.url} />
    <meta name="robots" content="all" />
    <meta name="title" content={ buildTitle(title) } />

    <meta property="og:locale:alternate" content="en_US" />
    <meta property="og:description" content={ description || defaults.description } />
    <meta property="og:site_name" content={ 'gabrielima.com - ' + defaults.title } />
    <meta property="og:title" content={ buildTitle(title) } />
    <meta property="og:image" content={ ogImage || defaults.ogImage } />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={ url || defaults.url } />

    <link rel="author" href="https://twitter.com/rabeloglr" />
    <link rel="canonical" href={ defaults.url } />
    <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
    <meta name="theme-color" content="#22A7F0" />

    <title>{ buildTitle(title) }</title>
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
  keywords: array
}

export default Head;
