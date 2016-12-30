import { create as createJss } from 'jss'
import { create as createSheet } from 'react-jss'
import defaultPreset from 'jss-preset-default'


export const jss = createJss()

jss.setup(defaultPreset())

export const useSheet = createSheet(jss)
