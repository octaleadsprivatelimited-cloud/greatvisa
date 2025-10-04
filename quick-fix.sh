#!/bin/bash
# Quick fix for react-scripts command not found
cd client && npm install --legacy-peer-deps && npm run build
