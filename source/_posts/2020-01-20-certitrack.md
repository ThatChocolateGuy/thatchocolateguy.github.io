---
layout: post
title: Certitrack
permalink: certitrack
date: 2020-01-20T11:44:01.000Z
comments: false
description: certitrack
image: /images/certitrack.png
keywords: >-
  gift certificate management system, gcms, c#, .net, .net core, asp.net, azure,
  cloud, ci/cd, enterprise, web app, web application
categories: 'web, cloud'
tags:
  - 'c#'
  - asp.net
  - .net core
  - web app
  - azure
  - cloud
  - CI/CD
  - enterprise
---

<style>
    .cred-spacing {
      display: grid;
      grid-gap: 6px;
      grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
    }
    .credentials {
        text-decoration: none;
        color: #265C8D;
        font-weight: 500;
    }
</style>

<p style="margin-top: 10px">
    Certitrack is a fairly simple, yet relationally complex Gift Certificate Management System (GCMS). Issue, track, edit, delete, and redeem certificates. Easily manage staff, clients and much more. Suitable for any organization or team.
</p>

Built with Microsoft's .NET Core stack, Certitrack leverages the power of a robust and secure relational SQL database.
  
This server-rendered app uses the Bootstrap-based AdminLTE frontend framework, along with AJAX requests where possible, yielding a fast and highly responsive user experience (UX). Certitrack is Dockerized and deployed with Azure Pipleines (CI/CD).

---

### Backstory

In the final few months of college, my class was beginning to explore advanced .NET Core development. Our instructor approached me (as her strongest student at the time), sharing that there was a request to build an application for the head of the Massage Therapy Department at the college.
  
He was in need of a robust web app that could help his department go paperless with their gift certificate issuing and tracking system. It was new, intimidating, and I had no idea how to make it happen. "Challenge Accepted" was what I replied with. Here we are today.

---


### Check out the <a href="https://certitrack-gcms-demo.azurewebsites.net/" target="_blank">demo app</a> and <a href="https://github.com/ThatChocolateGuy/Certitrack" target="_blank">repo</a>
### <small>Login Credentials:</small>

<div class="cred-spacing">
  <div>
    <div>U: <span class="credentials">admin@certitrack.com</span></div>
    <div>P: <span class="credentials">admin123</span></div>
  </div>
    <div>
    <div>U: <span class="credentials">nonadmin@certitrack.com</span></div>
    <div>P: <span class="credentials">nonadmin</span></div>
  </div>
</div>

<sub><strong>Note:</strong> Please be patient as app may take some time to cold boot. Certitrack's database is hosted on an Azure server instance with auto-pausing db to conserve resources and save on overhead costs. This stuff ain’t cheap!</sub>

